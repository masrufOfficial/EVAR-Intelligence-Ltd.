import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticateRequest } from '@/lib/auth';
import { recordAuditLog } from '@/lib/audit';
import { sanitizeText } from '@/lib/sanitize';

// GET /api/products/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        OR: [{ id: params.id }, { slug: params.id }],
      },
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      product: {
        ...product,
        features: JSON.parse(product.features || '[]'),
        technology: JSON.parse(product.technology || '[]'),
        gallery: JSON.parse(product.gallery || '[]'),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}

// PUT /api/products/[id] - Requires SUPER_ADMIN, ADMIN, or EDITOR
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { user, errorResponse } = await authenticateRequest(req, [
    'SUPER_ADMIN',
    'ADMIN',
    'EDITOR',
  ]);

  if (errorResponse || !user) {
    return errorResponse || NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const existing = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const updated = await prisma.product.update({
    where: { id: params.id },
    data: {
      name: body.name ? sanitizeText(body.name) : existing.name,
      category: body.category ? sanitizeText(body.category) : existing.category,
      shortDescription: body.shortDescription
        ? sanitizeText(body.shortDescription)
        : existing.shortDescription,
      fullDescription: body.fullDescription
        ? sanitizeText(body.fullDescription)
        : existing.fullDescription,
      problem: body.problem ? sanitizeText(body.problem) : existing.problem,
      solution: body.solution ? sanitizeText(body.solution) : existing.solution,
      status: body.status || existing.status,
      isFeatured: typeof body.isFeatured === 'boolean' ? body.isFeatured : existing.isFeatured,
      ctaText: body.ctaText ? sanitizeText(body.ctaText) : existing.ctaText,
      heroMedia: body.heroMedia || existing.heroMedia,
    },
  });

  const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
  await recordAuditLog({
    actorId: user.userId,
    actorEmail: user.email,
    action: 'PRODUCT_UPDATE',
    resource: `PRODUCT_${updated.id}`,
    details: `Updated attributes for "${updated.name}"`,
    result: 'SUCCESS',
    ipAddress: clientIp,
  });

  return NextResponse.json({ success: true, product: updated });
}

// DELETE /api/products/[id] - Requires SUPER_ADMIN or ADMIN (Editors & Content Managers forbidden)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { user, errorResponse } = await authenticateRequest(req, [
    'SUPER_ADMIN',
    'ADMIN',
  ]);

  if (errorResponse || !user) {
    return (
      errorResponse ||
      NextResponse.json(
        { error: 'Forbidden: Only SUPER_ADMIN and ADMIN may delete product records.' },
        { status: 403 }
      )
    );
  }

  const existing = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  await prisma.product.delete({
    where: { id: params.id },
  });

  const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
  await recordAuditLog({
    actorId: user.userId,
    actorEmail: user.email,
    action: 'PRODUCT_DELETE',
    resource: `PRODUCT_${params.id}`,
    details: `Deleted product: "${existing.name}"`,
    result: 'SUCCESS',
    ipAddress: clientIp,
  });

  return NextResponse.json({ success: true, message: 'Product deleted' });
}
