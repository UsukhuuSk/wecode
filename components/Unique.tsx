import Image from "next/image";
import React from "react";
import { FaApple, FaPlay } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import unicef from "../assets/unicef.svg";
import grad from "../assets/grad.svg";
import certicates2 from "../assets/certificates2.svg";
import graph from "../assets/graph.svg";
// import grad from "../assets/cardgrad.png";
import star4 from "../assets/comingsoonstars.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import phone from "../assets/phone.png";
import wheel from "../assets/LandingPage/9.svg";
import { WobbleCard } from "./ui/wobble-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "../data/dummy";
import Teachers from "./Teachers";
import Faq from "./Faq";
import { Finish } from "./Finish";
import Footer from "./Footer";

export default function Unique() {
  return (
    <div className="bg-bgGrad text-center text-white pt-[88px] px-4 lg:px-0 overflow-hidden">
      <div className="max-w-[1100px] m-auto flex flex-col gap-12 mb-[183px]">
        <div className="flex flex-col items-center gap-4">
          <Image src={wheel} alt="" width={32} height={32} />
          <h1 className=" text-[24px] font-extrabold text-[#fff] font-manrope">
            Our features
          </h1>
        </div>
        <div className="flex flex-col lg:grid grid-cols-5 gap-[20px]">
          <WobbleCard containerClassName="cardGrad rounded-2xl pt-[33px] overflow-hidden col-span-2 border border-[#78FF5733]">
            <h1 className="text-mainblack text-[20px] font-extrabold font-manrope text-center text-white">
              Globally recognized certification
            </h1>
            <div className="border text-center border-[#78FF5733] w-[237px] h-[1px] mx-auto my-4"></div>
            <div className="flex items-center justify-center gap-6">
              <Image
                src={unicef}
                alt="unicef"
                width={54}
                height={12}
                className="object-cover"
              />
              <Image
                src={unicef}
                alt="unicef"
                width={54}
                height={12}
                className="object-cover"
              />
              <Image
                src={unicef}
                alt="unicef"
                width={54}
                height={12}
                className="object-cover"
              />
            </div>
            <Image src={certicates2} alt="certicates" className="text-white" />
          </WobbleCard>
          <WobbleCard containerClassName=" cardGrad border border-[#78FF5733] rounded-2xl flex flex-col gap-[75px] lg:gap-[30px] pt-[33px] py-[63px] col-span-3 overflow-hidden">
            <h1 className="text-white text-[20px] font-extrabold font-manrope text-center">
              Assessment of skills
              <div className="border text-center border-[#0000000D] w-[237px] h-[1px] mx-auto my-4"></div>
            </h1>

            <Image
              src={graph}
              alt="statistics"
              className="px-1 object-contain mx-auto lg:w-[485px] lg:h-[362px]"
            />
            <div className="flex justify-center gap-7">
              <div className="flex justify-between items-center gap-[6px]">
                <div className="bg-[#2EBD59] h-3 w-3 rounded"></div>
                <span className="text-[14px] font-normal font-manrope text-white">
                  Таны үзүүлэлт
                </span>
              </div>
              <div className="flex justify-between items-center gap-[6px]">
                <div className="bg-[#5C5C5C] h-3 w-3 rounded"></div>
                <span className="text-[14px] font-normal font-manrope text-white">
                  Дундаж
                </span>
              </div>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="cardGrad col-span-5"
            className="px-4 py-20 sm:px-10"
          >
            <Image
              src={wheel}
              alt=""
              width={48}
              height={48}
              className="absolute lg:top-[20%] lg:left-[6%] top-[10%] left-1/2 -translate-x-1/2"
            />
            <div className="max-w-[741px] flex absolute z-10">
              <div className="w-[250px] h-[192px] rotate-[2.856deg] blur-[80px] bg-[#e66482]"></div>
              <div className="w-[250px] h-[192px] rotate-[2.856deg] blur-[80px] bg-[#F9DD41]"></div>
              <div className="w-[250px] h-[192px] rotate-[2.856deg] blur-[80px] bg-[#FDA759]"></div>
              <div className="w-[250px] h-[192px] rotate-[2.856deg] blur-[80px] bg-[#A0DC93]"></div>
              <div className="w-[250px] h-[192px] rotate-[2.856deg] blur-[80px] bg-[#3BC9E8]"></div>
            </div>

            <Image
              src={star4}
              alt=""
              className="lg:hidden absolute top-[70%] left-1/2 -translate-x-1/2"
            />
            <Image src={star4} alt="" className="absolute left-0" />
            <div className="flex flex-col gap-4 justify-center lg:ml-36 z-20">
              <h1 className="text-mainblack text-[20px] font-extrabold font-manrope text-center">
                <div className=" text-[32px] text-white font-extrabold font-manrope text-start">
                  Mobile Application
                </div>
                <div className="text-[#FFFFFF80] text-2xl font-light text-start">
                  coming soon ...
                </div>
              </h1>
              <div className="flex items-center gap-3 z-[100]">
                <div className="flex items-center z-50 gap-2 py-2 px-4 rounded-[32px] bg-white border border-[#E3E3E3]">
                  <FaApple color="black" />
                  <Image src={apple} alt="" className="z-50" />
                </div>
                <div className="flex items-center gap-2 z-50 py-2 px-4 rounded-[32px] bg-white border-[#E3E3E3]">
                  <FaPlay color="black" />
                  <Image src={google} alt="" />
                </div>
              </div>
            </div>
            <Image
              src={phone}
              alt="screens"
              className="hidden lg:flex absolute bottom-0 right-0"
            />
          </WobbleCard>
        </div>
      </div>
      <div className="">
        {/* <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
      </div>
      <div className="mt-[188px]">
        <Teachers />
      </div>
      <div className="mt-[188px]">
        <Faq />
      </div>
      <div className="mt-[50px]">
        <Finish />
      </div>
      <Footer />
    </div>
  );
}
