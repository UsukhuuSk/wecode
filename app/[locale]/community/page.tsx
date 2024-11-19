import React from "react";
import { useTranslations } from "next-intl";
import eight from "../../../assets/LandingPage/8.svg";
import nine from "../../../assets/LandingPage/9.svg";
import ten from "../../../assets/LandingPage/10.svg";
import eleven from "../../../assets/LandingPage/11.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import NewFooter from "../../../components/NewFooter";

export default function page() {
  const t = useTranslations("community");

  return (
    <main className="h-full min-h-screen w-full relative m-auto overflow-hidden ">
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="flex flex-col justify-center px-5 py-[200px] items-center max-w-[1280px] m-auto gap-16 relative text-white">
        <div className="flex flex-col gap-4">
          <h1 className="team font-adineue text-5xl md:text-[96px] font-bold tracking-[0.151px] text-center">
            {t("welcome")}
          </h1>
          <p className="font-neue text-xl font-normal text-center">
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
                  <h1 className="font-bold font-adineue text-[24px]">
                    {t("content.name")}
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    {t("content.subTitle")}
                  </p>
                </span>
              </div>
              <div className=" text-black py-3 px-5 font-bold text-[14px] font-neue bg-[#78ff57] rounded-[48px]">
                {t("content.action")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8  mx-auto text-white font-neue ">
                <p className="mb-6">{t("content.intro")}</p>

                <h3 className="text-lg font-semibold mt-8 mb-4">
                  {t("content.eligibilityTitle")}
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>{t("content.eligibility.1")}</li>
                  <li>{t("content.eligibility.2")}</li>
                  <li>{t("content.eligibility.3")}</li>
                  <li>{t("content.eligibility.4")}</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-4">
                  {t("content.responsibilitiesTitle")}
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>{t("content.eligibility.1")}</li>
                  <li>{t("content.eligibility.2")}</li>
                  <li>{t("content.eligibility.3")}</li>
                  <li>{t("content.eligibility.4")}</li>
                  <li>{t("content.eligibility.5")}</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-4">
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
                  <h1 className="font-bold font-adineue text-[24px]">
                    {t("meetups.name")}
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    {t("meetups.subTitle")}
                  </p>
                </span>
              </div>{" "}
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#FF8500] rounded-[48px]">
                {t("meetups.action")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6">{t("meetups.content.communityHost")}</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
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
                  <h1 className="font-bold font-adineue text-[24px]">
                    {t("stories.name")}
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    {t("stories.subTitle")}
                  </p>
                </span>
              </div>
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#785EFF] rounded-[48px]">
                {t("stories.action")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6">{t("stories.content.1.title")}</p>
                <p className="mb-6">{t("stories.content.2.title")}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-[#FF9FE4]">
            <AccordionTrigger>
              {" "}
              <div className="flex items-center justify-start text-start gap-[20px]">
                <div className="">
                  <Image src={eleven} alt="" className="h-[18px] w-[18px]" />
                </div>
                <span>
                  <h1 className="font-bold font-adineue text-[24px]">
                    {t("involved.name")}
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    {t("involved.subTitle")}
                  </p>
                </span>
              </div>
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#FF9FE4] rounded-[48px]">
                {t("involved.action")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6"></p>
                <ul className="list-disc list-inside space-y-2 mb-6">
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
      <NewFooter />
    </main>
  );
}
