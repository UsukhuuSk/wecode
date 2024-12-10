import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { BaseApi } from "./api/baseApi";
import { ServerApi } from "./api/serverApi";

const protectedRoutes = ["/profile", "/leaderboard"];


export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname?.startsWith('/firebase')) {
    return NextResponse.next();
  }
  const locale = pathname.split("/")[1];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${locale}${route}`)
  );
  const token = req.cookies.get("authToken");

  if (isProtectedRoute) {
    const loginUrl = new URL(`/${locale}/login`, req.url);

    if (!token) {
      return NextResponse.redirect(loginUrl);
    }

  }
  if (token) {
    const isQuizRoute = pathname.includes('quiz')
    try {
      const data = await ServerApi._get('one/9/service_user_profile')
      if (!data.is_agreement && !isQuizRoute) {
        return NextResponse.redirect(new URL(`/quiz`, req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL(`/`, req.url));
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