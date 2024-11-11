"use client";
import React, { useState } from "react";
import { courses } from "../../../../data/dummy";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState("Бүгд");
  const locale = useLocale();
  const handleFilter = (level: any) => {
    setSelectedLevel(level);
    console.log(level);
  };
  const levels = ["Бүгд", "Анхан шат", "Дунд шат", "Ахисан шат"];
  const filteredCourses =
    selectedLevel === "Бүгд"
      ? courses
      : courses.filter((course) => course.level === selectedLevel);
  return (
    <div className="px-12 py-14">
      <div className="px-6 pb-6 flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1>Сургалтууд</h1>
          <h2 className="text-[#5C5C5C80] text-[14px]">
            Сургалт бүр түвшингээр ялгагдаж байгаа тул бүртгүүлээд түвшинээ
            мэдээрэй.
          </h2>
        </span>
        <div className="flex items-center gap-3">
          {levels.map((level) => (
            <div
              key={level}
              onClick={() => handleFilter(level)}
              className={`px-6 py-3 rounded-[32px] border border-[#E3E3E3] font-semibold text-[14px] cursor-pointer ${
                selectedLevel === level
                  ? "bg-[#2EBD59] text-white"
                  : "text-[#5C5C5C]"
              }`}
            >
              {level}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 px-6">
        {filteredCourses.map((item, index) => (
          <Link href={`/${locale}/courses/${item.id}`} key={index}>
            <div className="px-3 pt-3 pb-4 flex flex-col gap-2 border border-[#E3E3E3] rounded-[32px] max-w-[350px] object-cover overflow-hidden">
              <div className="relative w-full h-[160px] object-cover  overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={330}
                  height={160}
                  className="rounded-[20px] w-full h-full object-cover"
                />
                <div
                  className={`absolute top-[10%] left-[5%] px-3 py-1 rounded-[32px] border border-[#E3E3E3] font-semibold text-[12px] text-white z-[100] ${
                    item.level === "Анхан шат"
                      ? "bg-[#e26c00]"
                      : item.level === "Дунд шат"
                      ? "bg-[#FBBC05]"
                      : item.level === "Ахисан шат"
                      ? "bg-[#E20034]"
                      : ""
                  }`}
                >
                  {item.level}
                </div>
              </div>
              <div className="flex items-center gap-[10px] px-3">
                <h3 className="font-semibold text-xs text-[#5c5c5c]">
                  {item.teacher}
                </h3>
                <div className="w-[3px] h-[3px] bg-[#d9d9d9]"></div>
                <p className="text-[#5c5c5c] font-semibold text-xs">
                  {item.length} цагийн хичээл
                </p>
              </div>
              {/* <p className="text-gray-600">{item.level}</p> */}
              <p className="text-[#191919] text-[16px] font-bold px-3">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// <AuroraBackground>
//   {/* <FloatingNavDemo /> */}
//   <motion.div
//     initial={{ opacity: 0.0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{
//       delay: 0.3,
//       duration: 0.8,
//       ease: "easeInOut",
//     }}
//     className="relative flex flex-col gap-4 items-center justify-center px-4 h-[140vh]"
//   >
//     <div className="font-montserratAlt gradtext text-3xl md:text-7xl font-bold text-white text-center">
//       Coming Soon
//     </div>
//   </motion.div>
// </AuroraBackground>
