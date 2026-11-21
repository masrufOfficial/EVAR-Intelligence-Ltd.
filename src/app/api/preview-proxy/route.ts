import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get('url');

  if (!urlParam) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(urlParam);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('Invalid protocol');
    }
  } catch {
    return NextResponse.json({ error: 'Invalid URL provided' }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(parsedUrl.toString(), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeout);

    // If target site is not ok (404, 500, etc.), return error so frontend falls back cleanly
    if (!response.ok) {
      return NextResponse.json(
        { error: `Site returned HTTP ${response.status}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      return NextResponse.json(
        { error: 'Target URL is not an HTML document' },
        { status: 415 }
      );
    }

    let html = await response.text();

    // Ensure relative links, stylesheets, and images load from the target host
    const origin = parsedUrl.origin;
    const baseTag = `<base href="${origin}/" target="_blank">`;

    // Rewrite relative Next.js asset paths to target origin to ensure images and stylesheets load cleanly
    html = html.replace(/(src|href|srcset)=["'](\/_next\/[^"']+)["']/gi, (match, attr, path) => {
      return `${attr}="${origin}${path}"`;
    });

    // Strip frame-busting scripts if any exist
    html = html.replace(/if\s*\(\s*top\s*!==\s*self\s*\)[^}]+}/gi, '');
    html = html.replace(/if\s*\(\s*window\.top\s*!==\s*window\.self\s*\)[^}]+}/gi, '');

    // Strip client-side JavaScript script tags so modern Next.js/React hydration never crashes cross-origin
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Inject base tag and styling to optimize preview scale and enable smooth scrolling
    const injectedHead = `
      ${baseTag}
      <style>
        /* Smooth preview rendering */
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(0, 180, 216, 0.4); border-radius: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        html, body {
          overflow-y: auto !important;
          max-width: 100vw !important;
          touch-action: pan-y !important;
          -webkit-overflow-scrolling: touch !important;
        }
      </style>
    `;

    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>${injectedHead}`);
    } else if (html.includes('<head ')) {
      html = html.replace(/<head[^>]*>/i, (match) => `${match}${injectedHead}`);
    } else {
      html = `<head>${injectedHead}</head>${html}`;
    }

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=1800, stale-while-revalidate=86400',
        // Explicitly omit X-Frame-Options and Content-Security-Policy to allow embedding
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Failed to fetch website' },
      { status: 502 }
    );
  }
}
