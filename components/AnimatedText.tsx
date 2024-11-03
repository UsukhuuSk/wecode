"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const chars = element.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 90 },
      {
        duration: 2,
        opacity: 1,
        y: 2,
        stagger: 0.03,
        ease: "elastic(1.2, 0.5)",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);
  const characters = text.split("").map((char, index) => (
    <div key={index} className="char grad">
      {char === " " ? "\u00A0" : char}
    </div>
  ));

  return (
    <div
      ref={containerRef}
      className="flex ovsoge text-[40px] lg:text-8xl font-bold "
    >
      {characters}
    </div>
  );
};

export default AnimatedText;
