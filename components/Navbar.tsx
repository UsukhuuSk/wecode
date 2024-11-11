"use client";

import React from "react";
import logo from "../assets/userDash/mainLogo.svg";
import Image from "next/image";
import person from "../assets/LandingPage/avatar.jpg";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const locale = useLocale();

  return (
    <div className="w-full bg-[#141B34] px-8 pt-6 pb-5">
      <div className="w-full flex justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo" width={106} height={32} />
        </Link>
        <Link
          href={`/${locale}/profile`}
          className="outerFrame rounded-full h-10 w-10 object-cover bg-cover"
        >
          <div className="frame">
            <Image src={person} alt="Logo" width={106} height={106} />
          </div>
        </Link>
      </div>
    </div>
  );
}
