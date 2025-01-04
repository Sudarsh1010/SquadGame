import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('jwt');
  const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`;

  // Skip middleware for API routes and public assets
  if (req.nextUrl.pathname.startsWith('/api') || 
      req.nextUrl.pathname.startsWith('/_next') ||
      req.nextUrl.pathname.startsWith('/public')) {
    return NextResponse.next();
  }

  if (!token) {
    try {
      const loginResponse = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "walletAddress": '0x1234567890', // TODO: Replace with actual wallet address
        }),
      });

      if (!loginResponse.ok) {
        return NextResponse.redirect(new URL('/', req.url));
      }

      const { token: newToken } = await loginResponse.json();
      const response = NextResponse.next();

      // Set both HTTP-only and client-accessible cookies
      // HTTP-only cookie for security
      response.cookies.set('jwt', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      });


      return response;
    } catch (error) {
      console.error('Middleware error:', error);
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - API routes (/api/*)
     * - Static files (_next/static/*, favicon.ico, etc.)
     * - Public files (public/*)
     */
    '/((?!api|_next/static|_next/image|public|favicon.ico).*)',
  ],
};
