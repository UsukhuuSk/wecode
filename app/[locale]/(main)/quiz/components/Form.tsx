"use client";
import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Image from "next/image";
import purple from "../../../../../assets/soon/purplecircle.png";
import seventh from "../../../../../assets/LandingPage/7.svg";
import eight from "../../../../../assets/LandingPage/8.svg";
import nine from "../../../../../assets/LandingPage/9.svg";
import ten from "../../../../../assets/LandingPage/10.svg";
import eleven from "../../../../../assets/LandingPage/11.svg";
import twelve from "../../../../../assets/LandingPage/12.svg";
import logo from "../../../../../assets/shortlogo.svg";
import { useTranslations } from "next-intl";

export default function Form() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const next = () => setCurrentStep((prev) => prev + 1);
  const back = () => setCurrentStep((prev) => prev - 1);
  const trns = useTranslations("quiz");

  return (
    <div className="flex flex-col gap-10 items-center h-screen relative">
      <div className="overflow-hidden h-[200px] xl:h-[450px] absolute bottom-0 -z-50">
        <Image
          src={purple}
          alt=""
          width={1004}
          height={1004}
          className="-rotate-45 bg-cover bg-no-repeat"
        />
      </div>
      <div className="flex flex-col items-center gap-8 mt-20">
        <div className="w-[50px] h-[50px]">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center gap-8">
          <Image
            src={seventh}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={eight}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={nine}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={ten}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={eleven}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={twelve}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
        </div>
        <div className="text-[14px] font-normal font-neue text-[rgba(255,255,255,0.5)]">
          {trns("tip")}
        </div>
      </div>
      <div className="pt-4 px-6 pb-6 bg-white w-[620px] mx-auto rounded-3xl">
        {currentStep === 1 && <Step1 next={next} />}
        {currentStep === 2 && <Step2 next={next} back={back} />}
        {currentStep === 3 && <Step3 next={next} back={back} />}
        {currentStep === 4 && <Step4 next={next} back={back} />}
        {currentStep === 5 && <Step5 next={next} back={back} />}
      </div>
    </div>
  );
}
