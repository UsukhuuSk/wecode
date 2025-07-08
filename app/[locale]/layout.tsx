import type { Metadata } from "next";
import "../globals.css";

import { Montserrat_Alternates, Manrope, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { ReactLenis } from "../../lib/lenis";
import { AuthProvider } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
const montserratAlt = Montserrat_Alternates({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alt",
});
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-manrope",
});
const golosText = Golos_Text({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-golos-text",
});
const ovSoge = localFont({
  src: [
    {
      path: "../fonts/OVSoge-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/OVSoge-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/OVSoge-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/OVSoge-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../fonts/OVSoge-Bold.otf",
      weight: "700",
    },
    {
      path: "../fonts/OVSoge-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-ov-soge",
  preload: true,
});

const adineue = localFont({
  src: [
    {
      path: "../fonts/new/adineuePROKZ-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-adineue",
  preload: true,
});
const neue = localFont({
  src: [
    {
      path: "../fonts/new/NeueAlteGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/new/NeueAlteGrotesk-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../fonts/new/NeueAlteGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/new/NeueAlteGrotesk-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/new/NeueAlteGrotesk-Light.woff2",
      weight: "300",
    },
    {
      path: "../fonts/new/NeueAlteGrotesk-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-neue",
  preload: true,
});
export const metadata: Metadata = {
  title: "AI Academy",
  description: "Empowering the Next Generation",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
        <Head>
          <meta
            name="google-site-verification"
            content="IXr3MbyNd2b3LsnF3t_n1vIE0__jrivmXb-_aB6-SlI"
          />
        </Head>
        <body
          className={`${montserratAlt.variable} ${manrope.variable} ${ovSoge.variable} ${golosText.variable} ${adineue.variable} ${neue.variable} antialiased`}
          // className={`${ovSoge.variable} ${adineue.variable} ${neue.variable} antialiased`}

        >
          <NextIntlClientProvider messages={messages}>
            <AuthProvider>
              {children}
              <ToastContainer />
            </AuthProvider>
          </NextIntlClientProvider>
        </body>
    </html>
  );
}
