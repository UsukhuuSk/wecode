import React from "react";
import { leaders } from "../../../../data/dummy";
import Image from "next/image";
import workout from "../../../../assets/userDash/sidebar/Workout.svg";

export default function Leaderboard() {
  return (
    <div className="px-12 py-14">
      <div className="px-6 pb-6 flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1>Leaderboard</h1>
          <h2 className="text-[#5C5C5C80] text-[14px]">
            Сургалт бүр түвшингээр ялгагдаж байгаа тул бүртгүүлээд түвшинээ
            мэдээрэй.
          </h2>
        </span>
        <div className="flex items-center gap-3">
          {/* {levels.map((level) => (
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
          ))} */}
        </div>
      </div>
      <div className="px-6 pb-6 bg-[#A0DC9308] h-screen w-full">
        <div className="flex justify-center gap-[72px]">
          {leaders.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`text-center relative flex flex-col gap-2 ${
                index === 0
                  ? "order-1"
                  : index === 1
                  ? "order-0 mt-20"
                  : "order-2 mt-20"
              }`}
            >
              <div className="">
                <div
                  className={`relative rounded-full overflow-hidden w-[122px] h-[122px] ${
                    index === 0
                      ? "border-[3px] border-[#F9DD41]"
                      : index === 1
                      ? "border-[3px] border-[#E5E7EB]"
                      : "border-[3px] border-[#FED7AA]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`Leader ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={122}
                    height={122}
                  />
                </div>
                <span
                  className={`absolute top-[50%] left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 font-bold ${
                    index === 0
                      ? "bg-[#F9DD41] top-[40%]"
                      : index === 1
                      ? "bg-[#E5E7EB]"
                      : "bg-[#FED7AA]"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <p className="font-semibold text-black text-[14px] mt-6">
                {item.name}
              </p>
              <p className="font-semibold text-black text-[14px] flex">
                <Image src={workout} alt="aaa" />
                {item.watchedHours} hours
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-16">
          {leaders.slice(3, 10).map((item, index) => (
            <div
              className="flex justify-between items-center rounded-xl border border-[#0000001A] group hover:bg-[#A3E635] transition-colors duration-300 ease-in-out"
              key={index}
            >
              <div className="flex items-center justify-between gap-10">
                <span className="pl-[52px] text-[#4F4F4F] text-[14px] font-semibold">
                  {item.id + 1}
                </span>
                <div className="py-2 flex items-center gap-3">
                  <div className=" w-8 h-8 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[#4F4F4F] text-[14px] font-semibold">
                    {item.name}
                  </span>
                </div>
              </div>
              <span className="pr-[52px] text-[#4F4F4F] text-[14px] font-semibold">
                {item.watchedHours} hours
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
