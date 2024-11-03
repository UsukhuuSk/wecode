import React from "react";
import { Boxes } from "./ui/Boxes";
import { cn } from "../lib/utils";
import Image from "next/image";
// import logo from "../assets/logo.svg";
import ActionCard from "./ui/ActionCard";

export function Finish() {
  const cards = [
    {
      name: "Donate us",
      description:
        "Help us expand our reach and provide AI education to more students.",
      action: "Coming Soon",
      main: true,
      size: "col-span-2",
    },

    {
      name: "Get involved",
      description:
        "Join us in our mission by volunteering or partnering with us.",
      // action: "I want to volunteer.",
      action: "Coming soon",
      size: "col-span-1",
    },
    {
      name: "Learn more",
      description: "Explore our programs and success stories.",
      action: "Coming soon",
      size: "col-span-1",
    },
  ];

  return (
    <div
      className=" bg-transparent relative z-10"
      // bg-[#27262B]
    >
      <div className="m-auto relative w-full py-[170px] overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="flex flex-col items-center justify-start gap-8 z-auto pb-[85px]">
          <div className="flex flex-col gap-6 z-auto relative">
            <h1 className={cn("relative z-20 ovsoge font-bold")}>
              <div className="text-[32px] md:text-6xl xl:text-7xl">
                <span>The </span>
                <span className="gradtext">future</span>
                <span className="xl:text-7xl md:text-6xl text-[32px] font-bold">
                  {" "}
                  starts today
                </span>
              </div>

              {/* <Image
                src={logo}
                alt="logo"
                width={50}
                height={30}
                className="z-[100] absolute -top-7  left-[55%] md:left-[370px]"
              /> */}
            </h1>
          </div>
        </div>
        <div className="flex justify-center px-6 z-30">
          <div className="max-w-[1200px] md:max-w-[1440px] flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            {cards.map((item, index) => (
              <ActionCard
                key={index}
                index={index}
                name={item.name}
                description={item.description}
                action={item.action}
                main={item.main}
                size={item.size}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10"></div>
    </div>
  );
}
