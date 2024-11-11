"use client";

import React from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import gridactive from "../assets/userDash/sidebar/gridactive.svg";
import coursesactive from "../assets/userDash/sidebar/bookactive.svg";
import medalactive from "../assets/userDash/sidebar/medalactive.svg";
import quizactive from "../assets/userDash/sidebar/quizactive.svg";
import communityactive from "../assets/userDash/sidebar/useractive.svg";
import textactive from "../assets/userDash/sidebar/licenseactive.svg";
import grid from "../assets/userDash/sidebar/dashboard-square-01.svg";
import courses from "../assets/userDash/sidebar/book-edit.svg";
import medal from "../assets/userDash/sidebar/medal-first-place.svg";
import quiz from "../assets/userDash/sidebar/quiz-02.svg";
import community from "../assets/userDash/sidebar/user-multiple.svg";
import text from "../assets/userDash/sidebar/license.svg";
import Image from "next/image";

export default function Sidebar({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const routes = [
    {
      path: `/${locale}/dashboard`,
      name: "Dashboard",
      icon: grid,
      active: gridactive,
    },
    {
      path: `/${locale}/courses`,
      name: "Courses",
      icon: courses,
      active: coursesactive,
    },
    {
      path: `/${locale}/leaderboard`,
      name: "Leaderboard",
      icon: medal,
      active: medalactive,
    },
    {
      path: `/${locale}/quiz`,
      name: "Quiz",
      icon: quiz,
      active: quizactive,
    },
    {
      path: `/${locale}/community`,
      name: "Community",
      icon: community,
      active: communityactive,
    },
    {
      path: `/${locale}/blog`,
      name: "Blog",
      icon: text,
      active: textactive,
    },
  ];

  return (
    <div className={cn("bg-[#141B34]", className)}>
      <div className="flex flex-col px-3 gap-2">
        {routes.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              href={item.path}
              key={item.name}
              className={cn(
                "text-white flex justify-between transition-all ease-in duration-300 text-[14px] font-semibold",
                isActive ? " font-bold" : "hover:bg-[#1E2A48]"
              )}
            >
              <span
                className={`flex items-center gap-[10px] py-3 px-3 ${
                  isActive ? "text-[#00ff9d]" : "text-white"
                } `}
              >
                <Image
                  src={!isActive ? item.icon : item.active}
                  alt="Logo"
                  width={16}
                  height={16}
                  color="#00ff9d"
                  className={`${isActive ? "text-[#00ff9d]  " : ""}`}
                />
                {item.name}
              </span>
              {isActive && (
                <div className="border border-r-[6px] border-[#00ff9d] transition-all ease-in-out duration-300"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
