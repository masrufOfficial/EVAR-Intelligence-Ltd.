import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateRequest } from '@/lib/auth';
import { recordAuditLog } from '@/lib/audit';
import { sanitizeText } from '@/lib/sanitize';
import { z } from 'zod';

const createProductSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100),
  category: z.string().min(2).max(50),
  shortDescription: z.string().min(10).max(300),
  fullDescription: z.string().min(20).max(3000),
  problem: z.string().min(10).max(1000),
  solution: z.string().min(10).max(1000),
  features: z.array(z.string()).min(1),
  technology: z.array(z.string()).min(1),
  heroMedia: z.string().url(),
  gallery: z.array(z.string()).optional(),
  status: z.enum(['published', 'draft', 'archived']).default('published'),
  isFeatured: z.boolean().default(false),
  ctaText: z.string().max(50).default('Explore Solution'),
});

// GET /api/products - Public or Admin list
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const statusParam = searchParams.get('status');

    const where: any = {};
    if (category && category !== 'All Solutions') {
      where.category = category;
    }

    if (statusParam) {
      where.status = statusParam;
    } else {
      // Default to published for general public
      where.status = 'published';
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
    });

    // Format features & technology JSON arrays for clean client consumption
    const formatted = products.map((p) => ({
      ...p,
      features: JSON.parse(p.features || '[]'),
      technology: JSON.parse(p.technology || '[]'),
      gallery: JSON.parse(p.gallery || '[]'),
    }));

    return NextResponse.json({ success: true, products: formatted });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve products' },
      { status: 500 }
    );
  }
}

// POST /api/products - RBAC Protected (SUPER_ADMIN, ADMIN, EDITOR)
export async function POST(req: NextRequest) {
  const { user, errorResponse } = await authenticateRequest(req, [
    'SUPER_ADMIN',
    'ADMIN',
    'EDITOR',
  ]);

  if (errorResponse || !user) {
    return errorResponse || NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Malformed JSON' }, { status: 400 });
  }

  const parseResult = createProductSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parseResult.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = parseResult.data;

  // Check slug uniqueness
  const existing = await prisma.product.findUnique({
    where: { slug: data.slug.toLowerCase().trim() },
  });

  if (existing) {
    return NextResponse.json(
      { error: 'A product with this URL slug already exists.' },
      { status: 409 }
    );
  }

  const newProduct = await prisma.product.create({
    data: {
      name: sanitizeText(data.name),
      slug: data.slug.toLowerCase().trim(),
      category: sanitizeText(data.category),
      shortDescription: sanitizeText(data.shortDescription),
      fullDescription: sanitizeText(data.fullDescription),
      problem: sanitizeText(data.problem),
      solution: sanitizeText(data.solution),
      features: JSON.stringify(data.features.map(sanitizeText)),
      technology: JSON.stringify(data.technology.map(sanitizeText)),
      heroMedia: data.heroMedia,
      gallery: JSON.stringify(data.gallery || []),
      status: data.status,
      isFeatured: data.isFeatured,
      ctaText: sanitizeText(data.ctaText),
      publishedAt: data.status === 'published' ? new Date() : null,
    },
  });

  const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
  await recordAuditLog({
    actorId: user.userId,
    actorEmail: user.email,
    action: 'PRODUCT_CREATE',
    resource: `PRODUCT_${newProduct.id}`,
    details: `Created product: "${newProduct.name}" under ${newProduct.category}`,
    result: 'SUCCESS',
    ipAddress: clientIp,
  });

  return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
}
