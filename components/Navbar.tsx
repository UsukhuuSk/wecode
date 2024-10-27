"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import NavPic from "../assets/6597052a12318ab7e710b7a453dc4800.png";
import book from "../assets/book-edit.svg";
import hat from "../assets/graduate-male.svg";
import diploma from "../assets/diploma.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "hidden lg:fixed bg-white inset-x-0 z-[100] lg:flex justify-between items-center px-[120px] border-b border-b-[#00000014]",
          className
        )}
      >
        <Link href="/">
          <Image src={logo} alt="wecode" />
        </Link>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Бүтээгдэхүүн">
            <div className="flex gap-8">
              <div className="flex flex-col space-y-4 text-sm w-full">
                <HoveredLink
                  href="/web-dev"
                  className="flex gap-[10px] py-3 px-[10px] items-center "
                >
                  <Image src={book} alt="" />
                  Сургалтууд
                </HoveredLink>
                <HoveredLink
                  href="/interface-design"
                  className="flex gap-[10px] py-3 px-[10px] items-center "
                >
                  <Image src={hat} alt="" />
                  Ур чадварын үнэлгээ
                </HoveredLink>
                <HoveredLink
                  href="/seo"
                  className="flex gap-[10px] py-3 px-[10px] items-center "
                >
                  <Image src={diploma} alt="" />
                  Сертификат
                </HoveredLink>
                {/* <HoveredLink href="/branding">Branding</HoveredLink> */}
              </div>{" "}
              <div>
                <Image src={NavPic} alt="" width={144} height={140} />
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Коммунити">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <Link
            href="/blog"
            className="text-[#27262BB2] font-semibold text-base"
          >
            Блог
          </Link>
          <Link
            href="/contact"
            className="text-[#27262BB2] font-semibold text-base"
          >
            Холбоо барих
          </Link>
        </Menu>
        <Link
          href="/login"
          className="text-white bg-mainblack px-6 py-3 rounded-[48px] text-base font-bold"
        >
          Нэвтрэх
        </Link>
      </div>

      <div className="lg:hidden px-4 py-5 flex justify-between items-center border-b border-b-[rgba(0, 0, 0, 0.08)] mb-[53px]">
        <Image src={logo} alt="" />
        <div>
          {/* <Image src={""} alt="" /> */}
          <RxHamburgerMenu size={24} color="#27262B" />
        </div>
      </div>
    </>
  );
}
