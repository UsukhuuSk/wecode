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
import globe from "../assets/globe.gif";
import { motion, AnimatePresence } from "framer-motion";
import WavyText from "./ui/wavytext";
import { useParams } from "next/navigation";

export default function Hero() {
  const t = useTranslations("HomePage");
  const { locale } = useParams()

  const [hoverText, setHoverText] = useState(t("hero.title"));
  return (
    <div className="flex flex-col sm:gap-5 relative">
      <div className="flex justify-center items-center gap-2 sm:gap-5 lg:gap-12 z-[50]">
        <div className="flex gap-1 sm:gap-5">
          <Image
            src={seventh}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.first"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
          <Image
            src={eight}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.second"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
          <Image
            src={nine}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.third"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
        </div>

        <div className="herotext font-bold text-[40px] sm:text-5xl xl:text-[64px] font-adineue">
          AI for All
        </div>
        <div className="flex gap-1 sm:gap-5">
          <Image
            src={ten}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.fourth"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
          <Image
            src={eleven}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.fifth"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
          <Image
            src={twelve}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[32px] 2xl:w-[32px]"
            onMouseEnter={() => setHoverText(t("hero.sixth"))}
            onMouseLeave={() => setHoverText(t("hero.title"))}
          />
        </div>
      </div>
      <div>
        {" "}
        <Image
          src={globe}
          alt=""
          className="bg-transparent mix-blend-screen absolute -translate-x-1/2 -top-[20%] left-1/2 w-[260px] h-[260px] xl:w-[600px] xl:h-[600px] -z-40"
        />
      </div>
      <div className="herosub text-center px-1 xl:p-0 mb-[80px]">
        <div className="bg-[#4317FF] blur-[160px] hidden sm:flex w-[341px] h-[278px] absolute translate-x-1/2 sm:left-0 md:left-[15%] xl:left-1/3 -z-[105]"></div>
        {/* <span className="font-bold text-4xl sm:text-6xl xl:text-8xl font-adineue transition-all duration-300 ease-in-out"> */}
        {/* <AnimatePresence mode="wait">
          <motion.span
            key={hoverText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="font-bold text-4xl sm:text-6xl xl:text-8xl font-adineue"
          >
            {hoverText}
          </motion.span>
        </AnimatePresence> */}

        <WavyText
          text={hoverText}
          replay={true}
          className={`font-bold ${locale === 'mn' ? 'text-3xl sm:text-4xl xl:text-6xl' : 'text-4xl sm:text-6xl xl:text-8xl'}  font-adineue m-auto text-center flex justify-center`}
        />
        {/* </span> */}
      </div>
    </div>
  );
}
