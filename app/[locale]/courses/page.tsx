"use client";
import React from "react";
import { AuroraBackground } from "../../../components/ui/Aurora-Background";
import { motion } from "framer-motion";
import { FloatingNavDemo } from "../../../components/Nav";
import CategoryCard from "../../../components/CategoryCard";
import Image from "next/image";
import purple from "../../../assets/soon/purplecircle.png";
// import {
//   Brain02Icon,
//   CodeCircleIcon,
//   RoboticIcon,
//   StarsIcon,
//   CodeFolderIcon,
//   AudioBook01Icon,
//   Database01Icon,
// } from "hugeicons-react";
import { categories } from "../../../constants/constants";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("Soon");
  // const categories = [
  //   {
  //     name: "Artificial Intelligence",
  //     icon: Brain02Icon,
  //     iconProps: { variant: "bulk", size: 24 },
  //     className: "border-[#FFD03B] text-[#FFD03B]",
  //   },
  //   {
  //     name: "Programming",
  //     icon: CodeCircleIcon,
  //     iconProps: { variant: "stroke", size: 24 },
  //     className: "border-[#68D8FC] text-[#68D8FC]",
  //   },
  //   {
  //     name: "Machine learning",
  //     icon: RoboticIcon,
  //     iconProps: { variant: "duotone", size: 24 },
  //     className: "border-[#22C55E] text-[#22C55E]",
  //   },
  //   {
  //     name: "AI Tools",
  //     icon: StarsIcon,
  //     iconProps: { variant: "bulk", size: 24 },
  //     className: "border-[#CC48F4] text-[#CC48F4]",
  //   },
  //   {
  //     name: "Software Development",
  //     icon: CodeFolderIcon,
  //     iconProps: { variant: "bulk", size: 24 },
  //     className: "border-[#F0493E] text-[#F0493E]",
  //   },
  //   {
  //     name: "AI Know How’s",
  //     icon: AudioBook01Icon,
  //     iconProps: { variant: "bulk", size: 24 },
  //     className: "border-[#6068F4] text-[#6068F4]",
  //   },
  //   {
  //     name: "Data Science",
  //     icon: Database01Icon,
  //     iconProps: { variant: "bulk", size: 24 },
  //     className: "border-[#CC48F4] text-[#CC48F4]",
  //   },
  // ];
  return (
    <main className="h-full min-h-screen w-full relative m-auto pt-[200px] overflow-hidden px-5">
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="flex flex-col justify-center items-center gap-16 relative ">
        <div className="soon text-center font-adineue text-5xl xl:text-8xl">
          {t("soon")}
        </div>
        <div className="flex flex-col gap-5 items-center z-50">
          <div className="grid xl:grid-cols-4 text-center gap-5">
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
          <div className="grid xl:grid-cols-3 text-center gap-5 m-auto">
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
        <div className="overflow-hidden h-[200px] xl:h-[450px]">
          <Image
            src={purple}
            alt=""
            width={1004}
            height={1004}
            className="-rotate-45 bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </main>
  );
}
