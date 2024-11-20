"use client";
import React from "react";
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
import logo from "../assets/newLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";
export function FloatingHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("footer");
  const navItems = [
    {
      name: t("about"),
      link: `/${locale}/about`,
    },
    {
      name: t("courses"),
      link: `/${locale}/courses`,
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
  return (
    <div className="relative w-full z-[100]">
      <div className="flex md:hidden fixed right-[5%] top-[5%] text-white ">
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerMenuIcon width={24} height={24} />
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
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                          `relative items-center flex rounded-3xl py-2 px-3 text-[#13032B] font-medium text-[14px] font-golosText transition-all ease-in-out duration-300 ${
                            isActive ? "bg-[#E2E8F0]" : ""
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
      </div>

      <FloatingNav navItems={navItems} />
    </div>
  );
}
