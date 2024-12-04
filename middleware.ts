import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const protectedRoutes = ["/profile", "/leaderboard"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const locale = pathname.split("/")[1];
  if (pathname === "/firebase-messaging-sw.js") {
    return NextResponse.next();
  }
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${locale}${route}`)
  );

  if (isProtectedRoute) {
    const token = req.cookies.get("authToken");

    if (!token) {
      const loginUrl = new URL(`/${locale}/login`, req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};