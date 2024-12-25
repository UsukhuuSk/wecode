"use client";
import React, { useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { useLocale, useTranslations } from "next-intl";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from ".././components/ui/sheet";
import logo from "@/assets/newLogo.svg";
import logoWithTitle from "@/assets/userlogo.svg";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";
export function FloatingHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("footer");
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false)
  const navItems = [
    {
      name: t("about"),
      link: `/${locale}/about`,
    },
    {
      name: t("courses"),
      link: `/${locale}/course`,
    },
    {
      name: t("blog"),
      link: `/${locale}/blog`,
    },
    {
      name: t("community"),
      link: `/${locale}/community`,
    },
    // {
    //   name: "Contact us",
    //   link: `/${locale}/contact`,
    // },
  ];
  const sheetClose = () => setSheetOpen(false)
  const RenderMobileMenu = () => {

    return (
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <button onClick={() => setSheetOpen(true)}>
            <HamburgerMenuIcon width={24} height={24} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-white z-[100] w-[200px]">
          <SheetHeader>
            <SheetTitle>
              <Image src={logo} alt="" />
              <LocaleSwitcher />
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col items-start justify-center gap-4 mt-[60px]">
                {navItems.map((navItem: any, idx: number) => {
                  const isActive = navItem.link === pathname;
                  return (
                    <Link
                      onClick={sheetClose}
                      key={`link=${idx}`}
                      href={navItem.link}
                      className={cn(
                        `relative items-center flex rounded-3xl py-2 px-3 text-[#13032B] font-medium text-[14px] font-golosText transition-all ease-in-out duration-300 ${isActive ? "bg-[#E2E8F0]" : ""
                        }`
                      )}
                    >
                      <span className="block">{navItem.icon}</span>
                      <span className="text-base font-semibold">
                        {navItem.name}
                      </span>
                    </Link>
                  );
                })}

                <Link
                  href={`/${locale}/login`}
                  className="border bg-[#4317FF] text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-2 rounded-[32px]"
                >
                  <span>{t("login")}</span>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>

          {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <div className="relative w-full z-[51]">
      <div className="flex w-full items-center md:hidden justify-center fixed top-4  ">
        <div className="bg-white w-[90%] flex justify-between items-center px-4 py-2 rounded-[32px]">
          <Link href={"/"}>
            <Image src={logo} alt="" />
          </Link>
          {RenderMobileMenu()}
        </div>
      </div>

      <FloatingNav navItems={navItems} />
    </div>
  );
}
