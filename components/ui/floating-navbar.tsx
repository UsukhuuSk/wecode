"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/newLogo.svg";
// import logo from "../../assets/ailogo.svg";
import LocaleSwitcher from "../LocaleSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const locale = useLocale();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const t = useTranslations("footer");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : 0,
          opacity: visible ? 1 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex justify-between max-w-[900px] fixed top-[3%] inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center space-x-4",
          className
        )}
      >
        {" "}
        <div>
          <Link href={"/"}>
            {" "}
            <Image src={logo} alt="" />{" "}
          </Link>
        </div>
        <div className="flex justify-center gap-4">
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
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <Link
            href={`${locale}/login`}
            className="border bg-[#4317FF] text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-5 py-2 rounded-[32px]"
          >
            <span>{t("login")}</span>
            {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
