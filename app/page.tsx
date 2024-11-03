"use client";
import { useEffect, useState } from "react";
import Intro from "../components/Introo/Intro";
import { people } from "../data/dummy";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Unique from "../components/Unique";
import Lenis from "lenis";
import Preloader from "../components/Preloader";
import { FloatingNavDemo } from "../components/Nav";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

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
    <main className="container">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <FloatingNavDemo />
          <Intro />
          <Unique />
        </>
      )}
    </main>
  );
}
