import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import arrow from "../assets/menuarrow.svg";

export default function Header() {
  const menus = [
    {
      name: "Бүтээгдэхүүн",
      href: "",
      submenus: [],
    },
    {
      name: "Коммунити",
      href: "",
      submenus: [],
    },
    {
      name: "Блог",
      href: "",
    },
    {
      name: "Холбоо барих",
      href: "",
    },
  ];

  return (
    <div className="flex justify-between items-center py-6 px-[120px] border-b border-b-[#00000014]">
      <Image src={logo} alt="wecode" width={148} height={24} />
      <div className="flex justify-between items-center gap-10">
        {menus.map((menu, index: any) => (
          <div
            className="flex justify-center items-center gap-[10px] cursor-pointer text-[#27262BB2] font-semibold text-base"
            key={index}
          >
            {menu.name} {menu.submenus && <Image src={arrow} alt="dropdown" />}
          </div>
        ))}
      </div>
      <Link
        href="/login"
        className="text-white bg-mainblack px-6 py-3 rounded-[48px] text-base font-bold"
      >
        Нэвтрэх
      </Link>
    </div>
  );
}
