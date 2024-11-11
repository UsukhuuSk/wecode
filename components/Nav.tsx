"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { useLocale } from "next-intl";

export function FloatingNavDemo() {
  const locale = useLocale();
  const navItems = [
    {
      name: "Courses",
      link: `/${locale}/courses`,
    },
    {
      name: "Community",
      link: `/${locale}/community`,
    },
    {
      name: "Blog",
      link: `/${locale}/blog`,
    },
    {
      name: "Contact us",
      link: `/${locale}/contact`,
    },
  ];
  return (
    <div className="relative w-full z-[100]">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
