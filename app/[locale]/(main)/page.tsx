"use client";
import circle from "../../../assets/landing/green.png";
import round from "../../../assets/LandingPage/opencircle.png";
import Image from "next/image";

import line from "../../../assets/line.svg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HomeTopArea from "@/components/home/topArea";
import HomeCatArea from "@/components/home/categoryCard";
import HomeFeatures from "@/components/home/features";
import HomeCourses from "@/components/home/courses";
import HomeInstruction from "@/components/home/instruction";
import HomeJourney from "@/components/home/journey";
import ClassroomTraining from "@/components/home/classroomTraining";
import { ReactLenis } from "@/lib/lenis";
import HomeYtArea from "@/components/home/ytArea";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <ReactLenis root>
      <main className="h-full w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px] -z-[100]"></div>
        <div className="absolute top-0 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px] -z-[100]"></div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-screen w-full "
        >
          <div className="flex justify-center relative -z-[100]">
            <div className="w-full h-screen absolute">
              <div className="absolute left-[50%] top-0 -translate-x-1/2 w-full h-[80%] -z-[100] overflow-hidden">
                <Image src={line} alt="" />
              </div>
              <Image
                src={circle}
                alt=""
                className="absolute hidden lg:flex top-3/4 md:top-[50%] -left-3/4 md:-left-[40%] xl:-left-[20%] 2xl:-left-[10%] z-[10]"
                width={458}
                height={458}
              />
              <Image
                src={round}
                alt=""
                className="absolute hidden lg:flex top-3/4 md:top-2/4 md:-right-[40%] -right-3/4 xl:-right-1/4 2xl:-right-[15%] z-50 rotate-[32]"
                width={500}
                height={472}
              />
            </div>
          </div>
          <div className="py-[120px] flex flex-col gap-24 ">
            <div className="container">
              <HomeTopArea />
            </div>
            <div className="container">
              <HomeCatArea />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-5 py-5 2xl:py-[175px] 2xl:px-[120px] text-white border-t border-t-[#FFFFFF33]  border-b-[#FFFFFF33] "
        >
          {/**@deprecetad*/}
          {/* <HomeFeatures /> */}
          <ClassroomTraining />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-5 py-20 2xl:py-[125px] 2xl:px-[120px] text-white relative border-t-2 border-t-[#FFFFFF33] rounded-[32px] md:rounded-t-[240px] flex flex-col gap-[120px]"
        >
          <HomeCourses />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-white "
        >
          <HomeYtArea />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-white "
        >
          <HomeInstruction />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <HomeJourney />
        </motion.div>
      </main>
    </ReactLenis>
  );
}
