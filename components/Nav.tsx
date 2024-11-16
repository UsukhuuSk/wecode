"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { useLocale, useTranslations } from "next-intl";

export function FloatingNavDemo() {
  const locale = useLocale();
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
      <FloatingNav navItems={navItems} />
    </div>
  );
}
