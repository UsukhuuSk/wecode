"use client";
import { usersList } from "../../api/serviceuser";
// import line from "../../assets/landing/line.svg";
// import line from "../../assets/landing/Vector.svg";
import circle from "../../assets/landing/green.png";
import round from "../../assets/LandingPage/opencircle.png";
import Image from "next/image";
import seventh from "../../assets/LandingPage/7.svg";
import eight from "../../assets/LandingPage/8.svg";
import nine from "../../assets/LandingPage/9.svg";
import ten from "../../assets/LandingPage/10.svg";
import eleven from "../../assets/LandingPage/11.svg";
import twelve from "../../assets/LandingPage/12.svg";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../constants/constants";
import Hero from "../../components/Hero";
import fancy from "../../assets/fancy.svg";
import fancy2 from "../../assets/fancy2.svg";
import fancy3 from "../../assets/fancy3.svg";
import fancy4 from "../../assets/fancy4.svg";
import line from "../../assets/line.svg";
import purple from "../../assets/landing/purplePlanet.png";
import { courses } from "../../data/dummy";
import mobile from "../../assets/asadasd.png";
import gif from "../../assets/5b7374bbd8f499bfd804b74baa6ebd7a.gif";
import { FaAppleAlt } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import React from "react";
import logo1 from "../../assets/landing/Mask group.svg";
import logo2 from "../../assets/landing/Mask group1.svg";
import logo3 from "../../assets/landing/Group 12.svg";
import { FaArrowRight } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import NewFooter from "../../components/NewFooter";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
  const fetchUsers = async () => {
    const param = { pageSize: 10, offset: 0, lang: "mn" };
    const params = new URLSearchParams(Object.entries<any>(param));
    console.log(params.toString());
    const users = await usersList({ params });
    console.log(users);
    return users;
  };
  const t = useTranslations("HomePage");
  const cardData = [
    {
      title: t("cardData.1.title"),
      img: fancy,
      description: t("cardData.1.description"),
    },
    {
      title: t("cardData.2.title"),
      img: fancy2,
      description: t("cardData.2.description"),
    },
    {
      title: t("cardData.3.title"),
      img: fancy4,
      description: t("cardData.3.description"),
    },
    {
      title: t("cardData.4.title"),
      img: fancy3,
      description: t("cardData.4.description"),
    },
  ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const Steps = [
    {
      number: 1,
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      className: "col-span-1 px-6 py-8",
      numberStyle: "bg-[#4317FF]",
      fade: "w-[120px] h-[120px] bg-[#4317FF] absolute blur-[80px] z-10 ",
    },
    {
      number: 2,
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      className: "col-span-1 px-6 py-8",
      numberStyle: "bg-[#68D8FC]",
      fade: "w-[120px] h-[120px] bg-[#68D8FC] absolute blur-[80px] z-10",
    },
    {
      number: 3,
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      className: "col-span-1 px-6 py-8",
      numberStyle: "bg-[#CC48F4]",
      fade: "w-[120px] h-[120px] bg-[#CC48F4] absolute blur-[120px] z-10",
    },
    {
      number: 4,
      title: t("steps.4.title"),
      description: t("steps.4.description"),
      className: "col-span-6 px-6 py-10 min-h-[185px]",
      numberStyle: "bg-[#F0493E]",
      fade: "w-[224px] h-[224px] bg-[#F0493E] absolute blur-[160px] z-10",
    },
  ];
  return (
    <main className="h-full w-full relative">
      <div className="absolute top-0 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px] -z-[100]"></div>
      <div className="absolute top-0 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px] -z-[100]"></div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div className="flex justify-center relative -z-[100]">
          <div className="w-full h-screen absolute">
            {/* <Image
              src={line}
              alt=""
              className="absolute left-[50%] top-0 -translate-x-1/2 w-full h-[80%] -z-[100] opacity-50 overflow-hidden"
            /> */}
            <div className="absolute left-[50%] top-0 -translate-x-1/2 w-full h-[80%] -z-[100] overflow-hidden">
              <Image src={line} alt="" />
            </div>
            <Image
              src={circle}
              alt=""
              className="absolute top-3/4 md:top-[50%] -left-3/4 md:-left-[40%] xl:-left-[20%] 2xl:-left-[10%] z-[10]"
              width={458}
              height={458}
            />
            <Image
              src={round}
              alt=""
              className="absolute top-3/4 md:top-2/4 md:-right-[40%] -right-3/4 xl:-right-1/4 2xl:-right-[15%] z-50 lg:flex rotate-[32]"
              width={500}
              height={472}
            />
          </div>
        </div>
        <div className="py-[120px] flex flex-col gap-24">
          <div>
            <Hero />
            <div className="text-center flex flex-col gap-10">
              <div className="text-[#5c5c5c] font-neue text-[20px] font-medium tracking-tight lg:tracking-[0.173px] m-auto">
                {t("subheadline")}
              </div>
              <div className="w-auto flex justify-center m-auto text-base font-bold font-neue py-4 px-4 text-center text-white bg-[#4317FF] rounded-[32px]">
                {t("start")}
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-5 items-center z-50">
              <div className="grid sm:grid-cols-2  xl:grid-cols-4 text-center gap-5 ">
                {categories.slice(0, 4).map((category, index) => (
                  <CategoryCard
                    key={index}
                    name={category.name}
                    className={category.className}
                    icon={category.icon}
                    // iconProps={category.iconProps}
                  />
                ))}
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 text-center gap-5 m-auto">
                {categories.slice(4, 7).map((category, index) => (
                  <CategoryCard
                    key={index}
                    name={category.name}
                    className={category.className}
                    icon={category.icon}
                    // iconProps={category.iconProps}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 py-5 2xl:py-[175px] 2xl:px-[120px] text-white"
      >
        <div className="block xl:flex items-center gap-[45px]">
          <div className="flex flex-col gap-12 items-center xl:items-start">
            <div className="border-2 border-[#4317FF] rounded-[32px] px-5 py-2 font-neue text-[18px] font-bold">
              {t("cardData.feature")}
            </div>
            <h1 className="font-bold font-neue text-4xl md:text-5xl text-center xl:text-start">
              {t("cardData.explore")}
            </h1>
            <p className="font-normal font-neue text-[16px] text-slate-300 text-center">
              {t("cardData.unlock")}
            </p>
            <div className="flex items-center gap-5 md:gap-10 m-auto xl:m-0">
              <Image
                src={seventh}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
              <Image
                src={eight}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
              <Image
                src={nine}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
              <Image
                src={ten}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
              <Image
                src={eleven}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
              <Image
                src={twelve}
                alt=""
                className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
              />
            </div>
          </div>
          <div className="my-10 xl:my-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col 2xl:w-[340px] min-h-[315px] border border-[#404047] rounded-3xl"
                >
                  <Image
                    src={card.img}
                    alt=""
                    width={340}
                    height={163}
                    className="cardShadow rounded-3xl object-cover"
                  />
                  <div className="px-[22px]">
                    <h1 className="text-[16px] font-neue font-medium">
                      {card.title}
                    </h1>
                    <p className="text-[14px] font-normal text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 py-20 2xl:py-[125px] 2xl:px-[120px] text-white relative border-t-2 border-t-[#FFFFFF33] rounded-[32px] md:rounded-t-[240px] flex flex-col gap-[120px]"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-[#4317FF] blur-[200px] min-w-[500px] max-w-[752px] h-[124px] -z-[10]"></div>
        <div className="text-center flex flex-col gap-8">
          <div className="max-w-[205px] flex justify-center m-auto text-[18px] font-bold font-neue py-2 px-4 text-center text-white border-2 border-[#4317FF] rounded-[32px]">
            {t("courses.title")}
          </div>
          <h1 className=" font-neue font-bold text-4xl md:text-5xl max-w-[960px] m-auto">
            {t("courses.subtitle")}
          </h1>
        </div>
        <div className="z-50">
          <Carousel>
            <CarouselContent className="space-x-5 pl-6">
              {courses.map((item, index) => (
                <div
                  key={index}
                  className="basis-1/3 pb-6 min-w-[365px] h-auto flex flex-col gap-4 rounded-3xl border border-[#404047] overflow-hidden"
                >
                  <div className=" 2xl:w-[365px] h-[190px] object-cover">
                    <Image
                      src={item.image}
                      alt=""
                      width={365}
                      height={190}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-[10px] text-slate-400">
                        <span>{item.teacher}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-slate-400"></span>
                        <span>{item.length} hours</span>
                      </div>
                      <div
                        className={`font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px] ${
                          item.level === "Анхан шат"
                            ? "text-[#22C55E] border-[#22C55E]"
                            : item.level === "Дунд шат"
                            ? "text-[#FDBA74] border-[#FDBA74]"
                            : item.level === "Ахисан шат"
                            ? "text-[#F0493E] border-[#F0493E]"
                            : ""
                        }`}
                      >
                        {item.level}
                      </div>
                    </div>
                    <div className="">{item.name}</div>
                  </div>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-black" />
            <CarouselNext className="bg-white text-black" />
          </Carousel>
        </div>
        <div className="font-bold text-[16px] font-neue px-10 py-4 rounded-[32px] bg-[#4317FF] text-white m-auto">
          {t("courses.signup")}
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative text-white "
      >
        <div className="absolute top-0 -left-[10%] -z-50">
          <Image src={purple} alt="" width={1000} height={1004} />
        </div>

        <div className="flex flex-col gap-[72px] px-5 py-5 2xl:px-[120px] 2xl:pt-[180px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 items-start">
              <div className="border-2 border-[#4317FF] rounded-[32px] px-5 py-2 font-neue md:text-[18px] font-bold ">
                {t("steps.title")}
              </div>
              <h1 className="text-4xl md:text-5xl"> {t("steps.subtitle")}</h1>
            </div>
            <div className="">
              <Image
                src={gif}
                alt=""
                width={120}
                height={120}
                className="bg-transparent mix-blend-screen"
              />
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-[1fr_80px_2fr_80px_3fr] gap-y-6">
            {Steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`bg-[#13032bcc] border border-[#404047] rounded-3xl relative text-center overflow-hidden flex flex-col gap-4 items-center font-neue ${step.className}`}
                >
                  <div className={`${step.fade}`}></div>
                  <div
                    className={`z-20 text-[40px] font-bold ${step.numberStyle} w-12 h-12 flex items-center justify-center text-center rounded-full`}
                  >
                    {step.number}
                  </div>
                  <div className="flex flex-col gap-2 z-20 ">
                    <h1 className="text-white text-2xl font-bold font-neue">
                      {step.title}
                    </h1>
                    <p className="font-normal text-[14px] text-slate-400 font-neue">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < 2 && (
                  <div className="w-[45px] h-[1px] separator items-center justify-center m-auto hidden md:flex "></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=""
      >
        <div className="mt-32 border-t border-b border-[#FFFFFF33]">
          <div className="flex flex-col gap-7 md:flex-row justify-between items-center px-5 py-5 2xl:px-[120px] 2xl:py-12">
            <span className="text-slate-400 font-medium text-2xl text-center">
              {t("partners")}
            </span>
            <Image src={logo3} alt="" />
            <Image src={logo1} alt="" />
            <Image src={logo2} alt="" />
          </div>
        </div>

        <div className="2xl:px-[120px] 2xl:py-[210px] px-5 py-5 sm:py-20 ">
          <div className="relative text-center text-white ">
            <h1 className=" text-4xl xl:text-[80px] font-bold font-adineue">
              {t("journey")}
            </h1>
            {/* <Image
              src={half}
              alt=""
              width={44}
              height={78}
              className="-rotate-90 absolute left-[33%] top-[90%] transform -translate-x-1/2 -translate-y-1/2"
            /> */}
          </div>
          <div className="mt-[68px] grid md:grid-cols-7 gap-5 mx-auto">
            <div
              className={`rainbow text-start md:col-span-5 p-12 rounded-3xl relative overflow-hidden flex gap-4 justify-start items-start font-neue `}
            >
              <div className="flex flex-col items-start gap-3 z-20 ">
                <h1 className="">
                  <span className="text-white text-2xl font-bold font-neue">
                    {t("mobile")}{" "}
                  </span>
                  <span className="text-2xl text-white font-light">
                    {t("soon")}
                  </span>
                </h1>
                <div className="flex md:flex-row flex-col items-start md:items-center justify-start gap-3">
                  <div className="flex items-center  gap-3 w-[170px] rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66] justify-start text-white py-[10px] px-5">
                    <FaAppleAlt size={16} color="#fff" />
                    <span>App Store</span>
                  </div>
                  <div className="flex items-center gap-3 w-[170px] rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66] justify-start text-white py-[10px] px-5">
                    <IoPlay size={16} color="#fff" />
                    <span>Google Play </span>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src={mobile}
                  alt="mobile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className={`bg-[#13032bcc] border-2 md:col-span-2 p-12 border-[#404047] rounded-3xl relative text-start overflow-hidden flex flex-col gap-4 items-center font-neue `}
            >
              <div className="flex flex-col items-start gap-6 z-20 ">
                <h1 className="text-white text-2xl font-bold font-neue">
                  {t("started")}
                </h1>
                <button className="flex items-center gap-3 w-auto justify-start rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66]  text-white py-[10px] px-5">
                  <span>{t("sign")} </span>
                  <FaArrowRight size={12} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <NewFooter />
    </main>
  );
}
