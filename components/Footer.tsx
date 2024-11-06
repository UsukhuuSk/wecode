import React from "react";
import fb from "../assets/social/svgexport-34.svg";
import linkedin from "../assets/social/svgexport-35.svg";
import ig from "../assets/social/ig.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const products = [
    { name: "Wecode Learning Platform", disabled: true, path: "" },
    {
      name: "Girlscode Program",
      disabled: false,
      path: "",
    },
  ];

  const organization = [
    { name: "About", disabled: true, path: "" },
    { name: "Volunteer opportunities", disabled: true, path: "" },
  ];
  const resources = [
    { name: "AI for All forum", disabled: true, path: "" },
    { name: "Events and meetups", disabled: true, path: "" },
    { name: "Community", disabled: true, path: "" },
    { name: "Contact us", disabled: true, path: "" },
  ];
  const follow = [
    { icon: fb, path: "https://www.facebook.com/girlscodemn" },
    { icon: ig, path: "https://www.instagram.com/girlscode.mn/?locale=sl" },
    {
      icon: linkedin,
      path: "https://www.linkedin.com/company/girlscode-mn/posts/?feedView=all",
    },
  ];
  return (
    <div className="max-w-[1280px] m-auto py-11 px-6">
      <div className="grid grid-cols-2 gap-8 md:flex md:items-start md:justify-between max-w-[1040px] m-auto ">
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold text-[#F0F0F0]">Products</h1>
          <ul className="flex flex-col gap-5">
            {products.map((item, index) => (
              <li
                className={`text-base font-normal ${
                  item.disabled ? "text-[#FFFFFF99]" : "text-[#F0F0F0]"
                }`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold text-[#F0F0F0]">Organization</h1>
          <ul className="flex flex-col gap-5">
            {organization.map((item, index) => (
              <li
                className={`text-base font-normal ${
                  item.disabled ? "text-[#FFFFFF99]" : "text-[#F0F0F0]"
                }`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-bold text-[#F0F0F0]">Resources</h1>
          <ul className="flex flex-col gap-5">
            {resources.map((item, index) => (
              <li
                className={`text-base font-normal ${
                  item.disabled ? "text-[#FFFFFF99]" : "text-[#F0F0F0]"
                }`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-bold text-[#F0F0F0]">Follow us</h2>
          <div className="flex items-center justify-between gap-4">
            {follow.map((item, index) => (
              <Link
                key={index}
                className=""
                href={item.path}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={item.icon} alt="icon" width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-[46px]">
        <span className="text-center text-white text-base font-normal">
          <a href="mailto:info@wecode.a">Contact: info@wecode.ai</a>
        </span>

        <div className="h-[1px] w-full footerline"></div>
        <div className="flex justify-center text-[#F0F0F0] text-sm font-normal">
          Copyright © 2024 Wecode AI, Org. All rights reserved.
        </div>
      </div>
    </div>
  );
}
