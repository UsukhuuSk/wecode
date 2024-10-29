"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Community",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Contact us",
      link: "/contactus",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return <></>;
};
