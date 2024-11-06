"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import line from "../../assets/landing/line.svg";
import bg from "../../assets/landing/1A8BA28B.svg";
import { people } from "../../data/dummy";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";
import circle from "../../assets/LandingPage/fullcircle.png";
import round from "../../assets/LandingPage/opencircle.png";
import brain from "../../assets/brain-02.svg";
import coding from "../../assets/code-circle.svg";
import Unique from "../Unique";
import AnimatedText from "../AnimatedText";
import Wander from "../Wander";
import seventh from "../../assets/LandingPage/7.svg";
import eight from "../../assets/LandingPage/8.svg";
import nine from "../../assets/LandingPage/9.svg";
import ten from "../../assets/LandingPage/10.svg";
import eleven from "../../assets/LandingPage/11.svg";
import twelve from "../../assets/LandingPage/12.svg";

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
        clipPath: "inset(0%)",
        // borderRadius: "24px",
      },
      {
        clipPath: "inset(0%)",
        // borderRadius: "24px",
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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });
    timeline
      .to(".section1", { opacity: 0, duration: 1 })
      .from(".section2", { opacity: 0, duration: 1 }, "-=0.5");
  });
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="flex justify-center relative">
        <div ref={background} className="w-full h-screen absolute bg-[#13032B]">
          {/* <Image
            src={bg}
            alt="background image"
            fill={true}
            className=" -z-50 bg-cover"
            loading="lazy"
          /> */}
          <div className="background w-full h-full -z-[50] bg-cover"></div>
          <Image
            src={line}
            alt=""
            className="absolute left-[50%] bg-cover top-0 -translate-x-1/2 w-full"
          />
          <Image
            src={circle}
            alt=""
            id="mobilephone"
            className="absolute top-[66%] -left-[5%] z-[10]"
            width={458}
            height={458}
          />
          <Image
            src={round}
            alt=""
            id="mobilephone"
            className="absolute top-2/4 -right-[15%] z-50 lg:flex hidden"
            width={662}
            height={588}
          />
          <div className="absolute w-[199px] h-[199px] bg-[#FF8500] blur-[100px] left-[60%] top-[30%] translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute w-[199px] h-[199px] bg-[#78FF57] blur-[100px] left-[35%] top-[30%] -translate-y-1/2 -translate-x-1/2"></div>
        </div>
        {/* <div>
          <div ref={introImage} data-scroll data-scroll-speed="0.3"></div>
        </div> */}
        <motion.div
          initial={{ opacity: 0.0, y: 250 }}
          whileInView={{ opacity: 1, y: 150 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative top-1/3 translate-y-1/4 z-10  text-white text-center flex flex-col items-center gap-6 lg:gap-12"
        >
          <div className="m-auto flex justify-center">
            <div className="flex items-center gap-6 py-2 px-3 lg:py-2 lg:px-4 rounded-[32px] bg-[#150A32] border border-[#00FF9D]">
              {/* <div className="flex flex-row items-center justify-center">
                {people.map((item) => (
                  <div className="-mr-3" key={item.name}>
                    <Image
                      height={100}
                      width={100}
                      src={item.image}
                      alt={item.name}
                      className="object-cover !m-0 !p-0 object-top rounded-full  w-6 h-6 lg:h-8 lg:w-8"
                    />
                  </div>
                ))}
              </div> */}
              <div className="flex flex-col items-start">
                <div className="flex justify-center items-start gap-1 ">
                  <span className="text-xs font-extrabold font-manrope text-white">
                    4.5
                  </span>
                  <div className="flex">
                    <IoIosStar
                      color="#FFCC15"
                      className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] "
                    />
                    <IoIosStar
                      color="#FFCC15"
                      className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] "
                    />
                    <IoIosStar
                      color="#FFCC15"
                      className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] "
                    />
                    <IoIosStar
                      color="#FFCC15"
                      className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] "
                    />
                    <IoIosStar
                      color="#FFCC15"
                      className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] "
                    />
                  </div>
                </div>
                <div className=" text-[#FFFFFF99] text-xs text-[16px] font-manrope text-center font-semibold">
                  1200+ сурагчид
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <span className="grad ovsoge text-[40px] lg:text-8xl font-bold">
              AI FOR ALL
            </span>
            {/* <AnimatedText text="AI FOR ALL" /> */}
          </div>
          {/* <Image src={first} alt="" />
            <Image src={second} alt="" />
            <Image src={third} alt="" />
            <Image src={fourth} alt="" />
            <Image src={fifth} alt="" />
            <Image src={sixth} alt="" /> */}
          <div className="flex justify-center gap-6 lg:gap-12">
            <Image
              src={seventh}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
            <Image
              src={eight}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
            <Image
              src={nine}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
            <Image
              src={ten}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
            <Image
              src={eleven}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
            <Image
              src={twelve}
              alt=""
              className="h-[32px] w-[32px] lg:h-[75px] lg:w-[75px]"
            />
          </div>
          <div className="text-center ">
            <div className="text-[#5c5c5c] font-manrope text-[14px] lg:text-[16px] font-medium tracking-tight lg:tracking-[0.173px] lg:w-[622px] m-auto">
              AI for All: Expanding our mission to democratize AI and coding
              education for everyone, everywhere.
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="flex justify-center relative"> */}
      <div
        // className="relative top-1/3 translate-y-1/4 z-10  text-white text-center flex flex-col items-center gap-12"
        className="relative top-1/3 -translate-y-1/4  z-[10] text-white text-center flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center justify-end gap-7">
          <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
            <div className="m-0 z-50 bg-[#13062D] flex justify-start items-center self-stretch w-auto rounded-[32px] border gap-[10px]  px-6 py-3 border-[#785EFF] text-start">
              <Image src={brain} alt="brain" width={24} height={24} />
              <span className="text-white font-manrope text-[14px] font-extrabold leading-none">
                Artificial Intelligence
              </span>
            </div>
            <div className="flex z-50 bg-[#13062D] justify-start self-stretch text-start w-auto rounded-[32px] border border-[#785EFF] items-center gap-[10px] px-6 py-3">
              <Image src={coding} alt="coding" width={24} height={24} />
              <span className="text-white font-manrope text-[14px] font-extrabold leading-none">
                Coding Program
              </span>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
