"use client";
import { useEffect } from "react";
import Intro from "../components/Introo/Intro";
import Lenis from "lenis";
import { FloatingNavDemo } from "../components/Nav";
import dynamic from "next/dynamic";

const NonCriticalComponent = dynamic(() => import("../components/Unique"), {
  ssr: false,
});

export default function Home() {
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
