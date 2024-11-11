import type { Metadata } from "next";
import "../globals.css";
import { Montserrat_Alternates, Manrope, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
// import Navbar from "../../components/Navbar";

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
      <body
        className={`${montserratAlt.variable} ${manrope.variable} ${ovSoge.variable} ${golosText.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
