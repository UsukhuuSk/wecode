import React, { useLayoutEffect, useRef } from "react";
import seventh from "../assets/LandingPage/7.svg";
import eight from "../assets/LandingPage/8.svg";
import nine from "../assets/LandingPage/9.svg";
import ten from "../assets/LandingPage/10.svg";
import eleven from "../assets/LandingPage/11.svg";
import twelve from "../assets/LandingPage/12.svg";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Wander() {
  const boxesRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const limit = { max: 20, pullRatio: 0 };
    const getRandom = () => gsap.utils.random(-limit.max, limit.max);
    const round = (value: number) => Math.round(value * 10000) / 10000;
    const safeNum = (value: number) => round(value) || 0; // Avoids NaN, e.g., 0 / 0.

    const getModifierPixels = (home: number) => (value: string) => {
      const numValue = parseFloat(value);
      return round(numValue + (home - numValue) * limit.pullRatio) + "px";
    };

    const getModifierDegrees = (home: number) => (value: string) => {
      const numValue = parseFloat(value);
      return round(numValue + (home - numValue) * limit.pullRatio) + "deg";
    };

    boxesRef.current.forEach((element) => {
      if (element) {
        const homeX = gsap.getProperty(element, "x") as number;
        const homeY = gsap.getProperty(element, "y") as number;
        const homeRot = gsap.getProperty(element, "rotation") as number;

        wander(element, homeX, homeY, homeRot);
      }
    });

    function wander(
      element: HTMLDivElement,
      homeX: number,
      homeY: number,
      homeRot: number
    ) {
      gsap.set(element, {
        x: safeNum(
          homeX +
            ((gsap.getProperty(element, "x") as number) - homeX) /
              (1 - limit.pullRatio)
        ),
        y: safeNum(
          homeY +
            ((gsap.getProperty(element, "y") as number) - homeY) /
              (1 - limit.pullRatio)
        ),
        rotation: safeNum(
          homeRot +
            ((gsap.getProperty(element, "rotation") as number) - homeRot) /
              (1 - limit.pullRatio)
        ),
      });

      gsap.to(element, {
        x: homeX + getRandom(),
        y: homeY + getRandom(),
        rotation: homeRot + getRandom(),
        modifiers: {
          x: getModifierPixels(homeX),
          y: getModifierPixels(homeY),
          rotation: getModifierDegrees(homeRot),
        },
        duration: gsap.utils.random(1.5, 4),
        ease: "sine.inOut",
        onComplete: () => wander(element, homeX, homeY, homeRot),
      });
    }

    gsap.to(limit, {
      pullRatio: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 0,
        end: "max",
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const setBoxRef = (element: HTMLDivElement | null, index: number) => {
    boxesRef.current[index] = element;
  };
  return (
    <div
      className="items-center flex justify-center mx-auto  gap-12"
      ref={containerRef}
    >
      <div ref={(el) => setBoxRef(el, 0)}>
        <Image src={seventh} alt="" />
      </div>
      <div ref={(el) => setBoxRef(el, 1)}>
        <Image src={eight} alt="" />
      </div>
      <div ref={(el) => setBoxRef(el, 2)}>
        <Image src={nine} alt="" />
      </div>
      <div ref={(el) => setBoxRef(el, 3)}>
        <Image src={ten} alt="" />
      </div>
      <div ref={(el) => setBoxRef(el, 4)}>
        <Image src={eleven} alt="" />
      </div>
      <div ref={(el) => setBoxRef(el, 5)}>
        <Image src={twelve} alt="" />
      </div>
    </div>
  );
}
