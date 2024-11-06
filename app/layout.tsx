import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates, Manrope, Golos_Text } from "next/font/google";
import localFont from "next/font/local";

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
      path: "./fonts/OVSoge-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/OVSoge-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/OVSoge-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/OVSoge-SemiBold.otf",
      weight: "600",
    },
    {
      path: "./fonts/OVSoge-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/OVSoge-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-ov-soge",
  preload: true,
});
export const metadata: Metadata = {
  title: "Ai Academy",
  description: "Empowering the Next Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratAlt.variable} ${manrope.variable} ${ovSoge.variable} ${golosText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
