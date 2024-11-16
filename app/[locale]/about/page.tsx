import React from "react";
import Image from "next/image";
import Teachers from "../../../components/Teachers";
import { useLocale, useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("about");
  return (
    <div className="flex flex-col gap-24 justify-center items-center py-[150px] h-full w-full relative -z-50">
      <div className="absolute z-50 -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute z-50 -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      {/* <div className="bg-[#3BC9E833] blur-[200px] rounded-full w-full h-[168px] absolute top-40"></div> */}

      <div className=" flex flex-col gap-[72px]">
        <div className="xl:w-auto m-auto rounded-[32px] bg-[#4317FF] py-3 px-12 flex justify-center items-center text-white text-sm font-semibold tracking-[0.151px]">
          {t("mission")}
        </div>
        <div className="px-6 max-w-[1200px] flex flex-col gap-3 xl:gap-5 text-start md:text-center">
          <span>
            <span className="text-[rgba(255,255,255,0.7)] text-[20px] md:text-[28px] font-normal leading-normal tracking-[0.302px]">
              {t("missionlong")}
            </span>
          </span>
          <br />
        </div>
      </div>
      <div className=" flex flex-col gap-[72px]">
        <div className="xl:w-1/5 m-auto rounded-[32px] bg-[#4317FF] py-3 px-12 flex justify-center items-center text-white text-sm font-semibold tracking-[0.151px]">
          {t("story")}
        </div>
        <div className="px-6 max-w-[1200px] flex flex-col gap-3 xl:gap-5 text-start md:text-center">
          <span>
            <span className="text-white text-[20px] md:text-[28px] font-extrabold leading-normal tracking-[0.302px]">
              {t("long.name")}{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.7)] text-[20px] md:text-[28px] font-normal leading-normal tracking-[0.302px]">
              {t("long.1")}{" "}
              <span className="text-[#ef345f] text-[20px] md:text-[28px] font-extrabold leading-normal tracking-[0.302px]">
                {t("long.girls")}{" "}
                <span className="text-[#591fc0] text-[20px] md:text-[28px] font-extrabold leading-normal tracking-[0.302px]">
                  {t("long.code")}{" "}
                </span>
              </span>
              {t("long.2")}{" "}
            </span>
          </span>
          <br />
          <span className="text-[rgba(255,255,255,0.7)] text-[20px] md:text-[28px] font-normal leading-normal tracking-[0.302px]">
            {t("long.3")}{" "}
          </span>
        </div>
      </div>
      <Teachers />
    </div>
  );
}
