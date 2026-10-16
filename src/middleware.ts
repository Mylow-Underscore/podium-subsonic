import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define common schemas for security checks
const RequestSchema = z.object({
  headers: z.record(z.string(), z.string()),
  cookies: z.record(z.string(), z.string()),
  body: z.any().optional(),
  query: z.record(z.string(), z.string()).optional(),
});

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');

  // Content Security Policy (Simplified for this example)
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim();

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - all files inside the /_next folder
     */
    '/((?!_next|[^?]*\\.(?:html?|css|js|json|gif|png|ico|webp)$).*)',
  ],
};
