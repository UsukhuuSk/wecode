'use client'
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import eight from "../../../../assets/LandingPage/8.svg";
import nine from "../../../../assets/LandingPage/9.svg";
import ten from "../../../../assets/LandingPage/10.svg";
import eleven from "../../../../assets/LandingPage/11.svg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import CommmunityButton from "@/components/community/button";
import CommunityForm from "@/components/community/form";
import { ReactLenis } from "@/lib/lenis";

export default function page() {
  const refFrom = useRef<any>(null)

  const t = useTranslations("community");

  const handleOpenForm = (tableName: any) => {
    refFrom.current.openForm(tableName, true)
  }


  return (
    <>
      <CommunityForm ref={refFrom} />
      <main className="h-full  min-h-screen relative overflow-hidden max-w-[90%] md:max-w-[720px] lg:max-w-[900px] m-auto">
        <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[10rem] w-[12rem] h-[10rem]"></div>
        <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[10rem] w-[12rem] h-[10rem]"></div>
        <div className=" flex flex-col justify-center py-[10rem] items-center gap-16 relative text-white">
          <div className="flex flex-col gap-4">
            <h1 className="team font-adineue text-5xl md:text-[2rem] lg:text-[2.5rem] xl:text-[3em] font-bold tracking-[0.151px] text-center ">
              {t("welcome")}
            </h1>
            <p className="font-manrope text-base md:text-lg lg:text-xl font-normal text-center">
              {t("subheadline")}
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-6"
          >
            <AccordionItem value="item-1" className="border-[#78FF57]">
              <AccordionTrigger className="flex justify-between items-center">
                <div className="flex items-center justify-start text-start gap-[20px]">
                  <div className="">
                    <Image src={eight} alt="" className="h-[18px] w-[18px]" />
                  </div>
                  <span>
                    <h1 className="font-semibold lg:font-bold font-adineue text-base md:text-lg lg:text-xl xl:text-2xl">
                      {t("content.name")}
                    </h1>
                    <p className="font-semibold lg:font-bold text-sm md:text-base font-adineue text-[rgba(255,255,255,0.5)]">
                      {t("content.subTitle")}
                    </p>
                  </span>
                </div>
                <CommmunityButton text={t("content.action")} table="com_agent_requests" color={"#78ff57"} onOpen={handleOpenForm} />
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 py-4 md:py-8 text-sm md:text-base  mx-auto text-white font-neue ">
                  <p className="mb-6">{t("content.intro")}</p>

                  <h3 className="text-base md:text-lg font-semibold mt-4 mb-4 md:mt-8 md:mb-4">
                    {t("content.eligibilityTitle")}
                  </h3>
                  <ul className="text-sm md:text-base list-disc list-inside space-y-2 mb-3 md:mb-6">
                    <li>{t("content.eligibility.1")}</li>
                    <li>{t("content.eligibility.2")}</li>
                    <li>{t("content.eligibility.3")}</li>
                    <li>{t("content.eligibility.4")}</li>
                  </ul>

                  <h3 className="text-base md:text-lg font-semibold mt-4 mb-4 md:mt-8 md:mb-4">
                    {t("content.responsibilitiesTitle")}
                  </h3>
                  <ul className="text-sm md:text-base list-disc list-inside space-y-2 mb-3 md:mb-6">
                    <li>{t("content.responsibilities.1")}</li>
                    <li>{t("content.responsibilities.2")}</li>
                    <li>{t("content.responsibilities.3")}</li>
                    <li>{t("content.responsibilities.4")}</li>
                    <li>{t("content.responsibilities.5")}</li>
                  </ul>

                  <h3 className="text-base md:text-lg font-semibold mt-4 mb-4 md:mt-8 md:mb-4">
                    {t("content.whyBecomeTitle")}
                  </h3>
                  <p className="mb-4">{t("content.whyBecomeIntro")}</p>
                  <ol className="list-decimal list-inside space-y-2 mb-6 pl-4">
                    <li>
                      <strong>{t("content.whyBecomeReasons.1.title")}</strong>
                      <br />
                      {t("content.whyBecomeReasons.1.description")}
                    </li>
                    <li>
                      <strong>{t("content.whyBecomeReasons.2.title")}</strong>
                      <br />
                      {t("content.whyBecomeReasons.2.description")}
                    </li>
                    <li>
                      <strong>{t("content.whyBecomeReasons.3.title")}</strong>
                      <br />
                      {t("content.whyBecomeReasons.3.description")}
                    </li>
                    <li>
                      <strong>{t("content.whyBecomeReasons.4.title")}</strong>
                      <br />
                      {t("content.whyBecomeReasons.4.description")}
                    </li>
                    <li>
                      <strong>{t("content.whyBecomeReasons.5.title")}</strong>
                      <br />
                      {t("content.whyBecomeReasons.5.description")}
                    </li>
                  </ol>
                  <p className="mb-4">
                    {t("content.contributeTitle")}
                    <br />
                    {t("content.contributeDescription")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-[#FF8500]">
              <AccordionTrigger className="flex justify-between items-center">
                <div className="flex items-center justify-start text-start gap-[20px]">
                  <div className="">
                    <Image src={nine} alt="" className="h-[18px] w-[18px]" />
                  </div>
                  <span>
                    <h1 className="font-semibold lg:font-bold font-adineue text-base md:text-lg lg:text-xl xl:text-2xl">
                      {t("meetups.name")}
                    </h1>
                    <p className="font-semibold lg:font-bold text-sm md:text-base font-adineue text-[rgba(255,255,255,0.5)]">
                      {t("meetups.subTitle")}
                    </p>
                  </span>
                </div>{" "}
                <CommmunityButton text={t("content.action")} table={'com_meetup_requests'} color={"#FF8500"} onOpen={handleOpenForm} />
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 py-4 md:py-8 mx-auto  font-neue text-sm md:text-base">
                  <p className="mb-6">{t("meetups.content.communityHost")}</p>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2 mb-3 md:mb-6">
                    <li>{t("meetups.content.communityContent.1")}</li>
                    <li>{t("meetups.content.communityContent.2")}</li>
                    <li>{t("meetups.content.communityContent.3")}</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#785EFF]">
              <AccordionTrigger>
                <div className="flex items-center justify-start text-start gap-[20px]">
                  <div className="">
                    <Image src={ten} alt="" className="h-[18px] w-[18px]" />
                  </div>
                  <span>
                    <h1 className="font-semibold lg:font-bold font-adineue text-base md:text-lg lg:text-xl xl:text-2xl">
                      {t("stories.name")}
                    </h1>
                    <p className="font-semibold lg:font-bold text-sm md:text-base font-adineue text-[rgba(255,255,255,0.5)]">
                      {t("stories.subTitle")}
                    </p>
                  </span>
                </div>
                <CommmunityButton text={t("content.action")} table={"com_story_requests"} color={"#785EFF"} onOpen={handleOpenForm} />
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 py-4 md:py-8 mx-auto text-white font-neue text-sm md:text-base">
                  <p className="mb-3 md:mb-6">{t("stories.content.1.title")}</p>
                  <p className="mb-3 md:mb-6">{t("stories.content.2.title")}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-[#FF9FE4]">
              <AccordionTrigger>
                {" "}
                <div className="flex items-center justify-start text-start gap-[20px]">
                  <div className="">
                    <Image src={eleven} alt="" className="h-[18px] w-[18px]" />
                  </div>
                  <span>
                    <h1 className="font-semibold lg:font-bold font-adineue text-base md:text-lg lg:text-xl xl:text-2xl">
                      {t("involved.name")}
                    </h1>
                    <p className="font-semibold lg:font-bold text-sm md:text-base font-adineue text-[rgba(255,255,255,0.5)]">
                      {t("involved.subTitle")}
                    </p>
                  </span>
                </div>
                <CommmunityButton text={t("content.action")} table={"com_influence_requests"} color={"#FF9FE4"} onOpen={handleOpenForm} />
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 py-4 md:py-8 mx-auto text-white font-neue text-sm md:text-base ">
                  <ul className="list-disc list-inside space-y-2 mb-3 md:mb-6">
                    <li>{t("involved.content.title")}</li>
                    <li>{t("involved.content.1")}</li>
                    <li>{t("involved.content.2")}</li>
                    <li>{t("involved.content.3")}</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </>
  );
}
