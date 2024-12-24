import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { ServerApi } from "./api/serverApi";

let locales = ['mn', 'en']


const protectedRoutes = ["/profile", "/leaderboard"];
function getLocale() {
  return locales[0]
}


export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (!pathnameHasLocale) {
    const locale = getLocale()
    req.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(req.nextUrl)
  }


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
      if (!data.is_agreement && !isQuizRoute && !['/mn', '/en'].includes(pathname)) {
        return NextResponse.redirect(new URL(`/quiz`, req.url));
      }
    } catch (error) {
      console.log('error', error)
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