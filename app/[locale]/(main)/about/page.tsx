'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/newLogo.svg";

import { useTranslations } from "next-intl";
import seventh from "@/assets/LandingPage/7.svg";
import eight from "@/assets/LandingPage/8.svg";
import nine from "@/assets/LandingPage/9.svg";
import ten from "@/assets/LandingPage/10.svg";
import eleven from "@/assets/LandingPage/11.svg";
import twelve from "@/assets/LandingPage/12.svg";
import purple from "@/assets/landing/purplePlanet.png";
import Link from "next/link";
import Teachers from "@/components/Teachers";
import logo1 from "@/assets/landing/Mask group.svg";
import logo2 from "@/assets/landing/Mask group1.svg";
import logo3 from "@/assets/landing/Group 12.svg";
import unicefLogo from "@/assets/landing/unicefLogo.png"
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  //style={{ borderBottomLeftRadius: '50% 5%', borderBottomRightRadius: '50% 5%' }}
  return (
    <div className="flex flex-col justify-center items-center h-full w-full relative overflow-hidden mb-20  bg-gray-200">
      <div className="absolute z-50 -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute z-50 -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      {/* <div className="bg-[#3BC9E833] blur-[200px] rounded-full w-full h-[168px] absolute top-40"></div> */}
      <div className="flex flex-col gap-5 bg-[#13032c] w-full pt-40 pb-10" >
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
      <div className="bg-[#13032c] h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
      <div className="container flex py-8 flex-wrap gap-8 md:gap-0 flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4 font-manrope">
          <div className=" text-justify">
            <motion.div initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <p className="text-2xl font-bold mb-2 font-neue">
                {t("mission")}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <span className="text-gray-700 text-base font-normal text-justify font-manrope">
                {t("missionlong")}
              </span>
            </motion.div>
          </div>
          <div className=" text-justify">
            <motion.div initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <p className="text-2xl font-bold mb-2 font-neue">
                {t("story")}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
              }}>
              <span className="text-gray-700 text-base font-normal font-manrope ">
                <span className="  font-normal ">
                  {t("long.name")}{" "}
                </span>
                <span className="  font-normal">
                  {t("long.1")}{" "}
                </span>
                <Link href="https://girlscode.mn/">
                  <span className=" text-base text-pink-400 underline font-semibold">{t("long.girls")} </span>
                </Link>
                <span className="  font-normal ">
                  {t("long.2")}
                </span>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-end">
          <motion.div initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
            }}>
            <Image className="w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]" src={logo} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="container py-16">
        <Teachers />
      </div>

      <div className="container pt-16">
        <div className=" ">
          <p className="text-2xl font-bold mb-2 font-neue text-center">
            {t('partners')}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="rounded-xl flex items-center justify-center h-28">
            <Image src={logo3} alt="" />
          </div>
          <div className="rounded-xl flex items-center justify-center h-28">
            <div className="h-24">
              <Image className="h-24 w-auto" src={unicefLogo} alt="" />
            </div>
          </div>
          <div className="rounded-xl flex items-center justify-center h-28">
            <Image src={logo2} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#13032c] h-20 w-full mt-20" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%' }}></div>
    </div>
  );
}
