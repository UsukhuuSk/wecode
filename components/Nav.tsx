"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Community",
      link: "/community",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];
  return (
    <div className="relative w-full z-[100]">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
