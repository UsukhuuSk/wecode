"use client";
import Image from "next/image";
// import bg from "../../assets/background.jpeg";
import intro from "../../assets/intro.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import line from "../../assets/landing/line.svg";
// import bg from "../../assets/LandingPage/background.png";
import bg from "../../assets/landing/1A8BA28B 1.svg";
import { people } from "../../data/dummy";
import { IoIosStar } from "react-icons/io";
import seventh from "../../assets/LandingPage/7.svg";
import eight from "../../assets/LandingPage/8.svg";
import nine from "../../assets/LandingPage/9.svg";
import ten from "../../assets/LandingPage/10.svg";
import eleven from "../../assets/LandingPage/11.svg";
import twelve from "../../assets/LandingPage/12.svg";
import unicef from "../../assets/unicef.svg";
import golomt from "../../assets/golomt.svg";
import circle from "../../assets/LandingPage/fullcircle.png";
import round from "../../assets/LandingPage/opencircle.png";

export default function Intro() {
  const background = useRef(null);
  const introImage = useRef(null);
  const containerRef = useRef(null);
  const boxesRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      background.current,
      {
        clipPath: "inset(2%)",
        borderRadius: "24px",
      },
      {
        clipPath: "inset(0%)",
        borderRadius: "24px",
        duration: 1,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=500px",
          scrub: true,
        },
      }
    );
    gsap.to("#mobilephone", {
      duration: 1.5,
      y: -30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="relative h-screen w-full">
      <div className="flex justify-center relative">
        <div
          ref={background}
          className="w-full h-screen absolute rounded-3xl bg-[#13032B]"
        >
          <Image
            src={bg}
            alt="background image"
            fill={true}
            className=" -z-50 bg-cover"
          />
          <Image
            src={line}
            alt=""
            className="absolute left-[50%] bg-cover top-0 -translate-x-1/2 w-full"
          />
          <Image
            src={circle}
            alt=""
            id="mobilephone"
            className="absolute top-[66%] -left-[5%] -z-[10]"
            width={458}
            height={458}
          />
          <Image
            src={round}
            alt=""
            id="mobilephone"
            className="absolute top-2/4 -right-[15%] -z-50"
            width={662}
            height={588}
          />
          <div className="absolute w-[199px] h-[199px] bg-[#FF8500] blur-[100px] left-[60%] top-[30%] translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute w-[199px] h-[199px] bg-[#78FF57] blur-[100px] left-[35%] top-[30%] -translate-y-1/2 -translate-x-1/2"></div>
        </div>
        {/* <div>
          <div ref={introImage} data-scroll data-scroll-speed="0.3"></div>
        </div> */}
        <div className="relative top-1/3 translate-y-1/4 z-10  text-white text-center flex flex-col items-center gap-12">
          <div className="m-auto  flex justify-center">
            <div className="flex items-center gap-6 py-2 px-4 rounded-[32px] bg-[#150A32] border border-[#00FF9D]">
              <div className="flex flex-row items-center justify-center">
                {people.map((item) => (
                  <div className="-mr-3" key={item.name}>
                    <Image
                      height={100}
                      width={100}
                      src={item.image}
                      alt={item.name}
                      className="object-cover !m-0 !p-0 object-top rounded-full  h-8 w-8"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex justify-center items-start gap-1 ">
                  <span className="text-xs font-extrabold font-manrope text-white">
                    4.5
                  </span>
                  <div className="flex ">
                    <IoIosStar size={14} color="#FFCC15" />
                    <IoIosStar size={14} color="#FFCC15" />
                    <IoIosStar size={14} color="#FFCC15" />
                    <IoIosStar size={14} color="#FFCC15" />
                    <IoIosStar size={14} color="#FFCC15" />
                  </div>
                </div>
                <div className=" text-[#FFFFFF99] font-manrope text-center font-semibold">
                  1200+ сурагчид
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <span className="gradtext ovsoge text-[40px] lg:text-8xl font-bold">
              AI FOR ALL
            </span>
          </div>
          <div className="flex justify-center gap-12">
            {/* <Image src={first} alt="" />
            <Image src={second} alt="" />
            <Image src={third} alt="" />
            <Image src={fourth} alt="" />
            <Image src={fifth} alt="" />
            <Image src={sixth} alt="" /> */}
            <Image src={seventh} alt="" />
            <Image src={eight} alt="" />
            <Image src={nine} alt="" />
            <Image src={ten} alt="" />
            <Image src={eleven} alt="" />
            <Image src={twelve} alt="" />
          </div>
          <div className="text-center">
            <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight lg:tracking-[0.173px] lg:w-[622px] m-auto">
              AI for All: Expanding our mission to democratize AI and coding
              education for everyone, everywhere.
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-1/3 -translate-y-1/2 z-10  text-white text-center flex flex-col items-center gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center gap-7">
            <Image src={unicef} alt="unicef" width={91} />
            <Image src={golomt} alt="golomtbank" width={110} />
          </div>
          <div className="m-0 flex justify-center ">
            <div className="px-5 py-4 rounded-[48px] text-white bg-[#27262B] font-manrope font-extrabold text-[16px]">
              Сургалт үзэж эхлэх
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
