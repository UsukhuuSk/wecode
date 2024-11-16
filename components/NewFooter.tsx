import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { ArrowRight02Icon } from "hugeicons-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function NewFooter() {
  const t = useTranslations("footer");
  const routes = [
    {
      name: t("about"),
      path: "/about",
    },
    {
      name: t("courses"),
      path: "/courses",
    },
    {
      name: t("blog"),
      path: "/blog",
    },
    {
      name: t("community"),
      path: "/community",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-[72px] px-[120px] py-12 overflow-hidden rounded-t-full border border-[#FFFFFF33] relative">
      <div className="absolute -top-0 w-full h-[104px] bg-[#4317FF] blur-[160px] rounded-full"></div>
      <div className="m-auto">
        <Image src={logo} alt="AI ACADEMY" />
      </div>
      <div className="flex justify-center gap-[85px]">
        {routes.map((route, index) => (
          <Link href={route.path} key={index}>
            <p className="text-slate-300 font-base font-bold tracking-[0.173px] text-[40px] font-adineue">
              {route.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-8 m-auto">
        <Link
          href="mailto:info@ai-academy.asia "
          className="flex items-center text-white px-5 py-[10px] gap-3 bg-[#FFFFFF33] border border-[#FFFFFF66] rounded-full"
        >
          <span>info@ai-academy.asia </span>
          <ArrowRight02Icon size={12} color={"#FFFFFF"} />
        </Link>
        <div className="flex items-center  gap-4">
          <Link
            href={"https://www.facebook.com/profile.php?id=61566964959193"}
            className="p-[10px] border border-[#FFFFFF66] rounded-full bg-[#FFFFFF33]"
          >
            <FaFacebook size={20} color={"#fff"} />
          </Link>
          <Link
            href="https://www.instagram.com/ai_academy_asia/"
            className="p-[10px] border border-[#FFFFFF66] rounded-full bg-[#FFFFFF33]"
          >
            <FaInstagram size={20} color={"#fff"} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/ai-academy-asia/"
            className="p-[10px] border border-[#FFFFFF66] rounded-full bg-[#FFFFFF33]"
          >
            <FaLinkedin size={20} color={"#FFFFFF"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
