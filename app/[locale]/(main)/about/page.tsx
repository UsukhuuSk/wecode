import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import seventh from "../../../../assets/LandingPage/7.svg";
import eight from "../../../../assets/LandingPage/8.svg";
import nine from "../../../../assets/LandingPage/9.svg";
import ten from "../../../../assets/LandingPage/10.svg";
import eleven from "../../../../assets/LandingPage/11.svg";
import twelve from "../../../../assets/LandingPage/12.svg";
import purple from "../../../../assets/landing/purplePlanet.png";
import Link from "next/link";
import Teachers from "../../../../components/Teachers";
export default function About() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col gap-24 justify-center px-5 items-center py-[150px] h-full w-full relative overflow-hidden container">
      <div className="absolute z-50 -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute z-50 -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      {/* <div className="bg-[#3BC9E833] blur-[200px] rounded-full w-full h-[168px] absolute top-40"></div> */}
      <div className="flex flex-col gap-[240px]">
        <div className=" flex flex-col gap-[80px]">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center gap-2 sm:gap-5 lg:gap-5 z-[50]">
              <Image src={seventh} alt="" className="h-[24px] w-[24px] " />
              <Image src={eight} alt="" className="h-[24px] w-[24px] " />
              <Image src={nine} alt="" className="h-[24px] w-[24px] " />
              <Image src={ten} alt="" className="h-[24px] w-[24px] " />
              <Image src={eleven} alt="" className="h-[24px] w-[24px] " />
              <Image src={twelve} alt="" className="h-[24px] w-[24px] " />
            </div>
            <div className="team font-adineue text-5xl md:text-[96px] font-bold tracking-[0.151px] text-center">
              {t("team")}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-12 max-w-[1270px]">
            <div className="border-2 flex justify-center m-auto items-center mt-4 min-w-[150px] h-[35px] text-[18px] font-bold font-neue border-[#4317FF] rounded-[32px] py-3 px-4 text-white">
              {t("mission")}
            </div>

            <span className="text-white text-xl md:3xl lg:text-4xl xl:text-5xl font-normal font-neue  text-justify leading-normal">
              {t("missionlong")}
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-[72px]">
          <div className="border-2 flex justify-center m-auto items-center mt-4 min-w-[150px] h-[35px] text-[18px] font-bold font-neue border-[#4317FF] rounded-[32px] py-3 px-4 text-white">
            {t("story")}
          </div>
          <div className="px-6 max-w-[1270px] relative flex flex-col gap-3 xl:gap-5 text-start md:text-center">
            <Image
              src={purple}
              alt=""
              className="lg:h-[600px] lg:w-[600px] m-auto absolute md:translate-x-1/2 md:-top-[100%] -z-10 rotate-[120deg]"
            />
            <span className="font-neue text-lg md:text-xl lg:text-2xl">
              <span className=" story font-normal leading-normal tracking-[0.302px]">
                {t("long.name")}{" "}
              </span>
              <span className=" story font-normal leading-normal tracking-[0.302px]">
                {t("long.1")}{" "}
              </span>
              <Link href="https://girlscode.mn/">
                <span className="title">{t("long.girls")} </span>
              </Link>
              <span className=" story font-normal leading-normal tracking-[0.302px]">
                {t("long.2")}
              </span>
            </span>
          </div>
        </div>
      </div>
      <Teachers />
    </div>
  );
}
