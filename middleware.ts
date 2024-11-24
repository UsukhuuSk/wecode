import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const protectedRoutes = ["/profile", "/dashboard", "/courses"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const locale = pathname.split("/")[1];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${locale}${route}`)
  );

  if (isProtectedRoute) {
    const token = req.cookies.get("authToken");

    if (!token) {
      const loginUrl = new URL(`/${locale}/auth`, req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(mn|en)/:path*"],
};
