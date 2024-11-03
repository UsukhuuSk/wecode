import React from "react";
import arrow from "../../assets/arrowright.svg";
import Image from "next/image";

export default function ActionCard({
  name,
  description,
  action,
  main,
  disabled,
  size,
}: any) {
  return (
    <div
      className={`flex flex-col h-[296px]  justify-between  ${
        main
          ? " py-14 px-12 flex-shrink-0 border-4 border-[#3CCAE9] group overflow-hidden relative transition-all ease-in-out duration-500"
          : "py-14 px-8 flex-1 border-[#9D9D9D33]"
      } rounded-2xl border-4  bg-transparent ${size}`}
    >
      <div className="flex flex-col justify-between items-start">
        <div className="text-white text-2xl leading-normal font-semibold ovsoge">
          {name}
        </div>
        <span className="text-base font-normal text-start leading-normal text-white">
          {description}
        </span>
      </div>
      {main ? (
        <div className="hidden group-hover:flex gradbg h-[534px] w-[534px] absolute -right-[137px] -bottom-[257px] transition-colors ease-in-out duration-500"></div>
      ) : (
        ""
      )}
      <button
        className="px-5 m-0 w-fit rounded-[48px] border border-[#FFFFFF66] 
      bg-[#FFFFFF33] py-[10px] flex justify-center items-center gap-1 text-sm font-bold"
      >
        {action}
        <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}
