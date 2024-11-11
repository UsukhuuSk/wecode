"use client";
import React from "react";
import { courses, user } from "../../../../data/dummy";
import Image from "next/image";
import { PiSealCheckFill } from "react-icons/pi";
import { Radar } from "react-chartjs-2";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Profile() {
  const locale = useLocale();
  const data = {
    labels: ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [12, 10, 0, 15, 20],
      },
    ],
  };
  return (
    <div className="px-12 py-14">
      {/* <div className="px-6 pb-6"></div> */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="w-full h-[173px]">
            <Image
              src={user.cover}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
          <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-white absolute top-3/4 left-[5%]">
            <Image
              src={user.profile}
              alt=""
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 px-6 pb-4 flex justify-between border-b border-[#C2CAD280]">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-[#E26C00] rounded-full w-[24px] h-[24px]">
              <PiSealCheckFill color="white" size={16} />
            </div>
            <div className="font-bold text-[20px] text-[#191919]">
              {user.name}
            </div>
          </div>
          <div className="px-6 py-2 rounded-[32px] border border-[#e3e3e3] text-[#5c5c5c] text-[14px] font-bold">
            Профайл засах
          </div>
        </div>
      </div>
      <div className="px-6 pb-4 mt-[28px]">
        <h3 className="text-[#191919] font-semibold text-[18px]">
          Миний үзүүлэлтүүд
        </h3>
        <div className="flex justify-between">
          <div className="">{/* <Radar data={data} /> */}</div>
          <div className="grid grid-cols-2 gap-4">
            {user.stats.map((item, index) => (
              <div
                className="py-5 px-16 text-center w-full border border-[#C2CAD280] rounded-xl"
                key={index}
              >
                <h3 className="text-center text-[#191919] text-[32px] font-extrabold">
                  {item.value}
                </h3>
                <div className="text-[#5c5c5c] text-[16px] font-medium">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pb-4 mt-[62px]">
        <div className="grid grid-cols-4 gap-6">
          {courses.slice(0, 4).map((item, index) => (
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
    </div>
  );
}
