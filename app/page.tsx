"use client";
import { useEffect, useState } from "react";
import Intro from "../components/Introo/Intro";
import { people } from "../data/dummy";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Unique from "../components/Unique";
import Lenis from "lenis";
import { FloatingNavDemo } from "../components/Nav";
import dynamic from "next/dynamic";

const NonCriticalComponent = dynamic(() => import("../components/Unique"), {
  ssr: false,
});

export default function Home() {
  // const scene = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: scene,
  //   offset: ["start start", "end end"],
  // });

  // const imageScale = useTransform(scrollYProgress, [0, 1], ["300px", "3000px"]);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <FloatingNavDemo />
      <Intro />
      <NonCriticalComponent />
    </main>
  );
}
