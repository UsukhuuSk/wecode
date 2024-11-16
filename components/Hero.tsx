"use client";
import { useState } from "react";
import seventh from "../assets/LandingPage/7.svg";
import eight from "../assets/LandingPage/8.svg";
import nine from "../assets/LandingPage/9.svg";
import ten from "../assets/LandingPage/10.svg";
import eleven from "../assets/LandingPage/11.svg";
import twelve from "../assets/LandingPage/12.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("HomePage");
  const [hoverText, setHoverText] = useState(t("hero.title"));
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center  lg:gap-12 z-[50]">
        <Image
          src={seventh}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText(t(""))}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />
        <Image
          src={eight}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText("Text for Eight")}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />
        <Image
          src={nine}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText("Text for Nine")}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />

        <div className="herotext font-bold text-[64px] font-adineue">
          AI for All
        </div>

        <Image
          src={ten}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText("Text for Ten")}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />
        <Image
          src={eleven}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText("Text for Eleven")}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />
        <Image
          src={twelve}
          alt=""
          className="h-[32px] w-[32px]"
          onMouseEnter={() => setHoverText("Text for Twelve")}
          onMouseLeave={() => setHoverText(t("hero.title"))}
        />
      </div>
      <div className="herosub font-bold text-8xl font-adineue text-center mb-[80px]">
        <div className="bg-[#4317FF] blur-[160px] w-[341px] h-[278px] absolute translate-x-1/2 left-1/3 -z-50"></div>
        {hoverText}
      </div>
    </div>
  );
}
