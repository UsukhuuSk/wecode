"use client";
import { useEffect } from "react";
import Intro from "../components/Introo/Intro";
import { people } from "../data/dummy";

import Image from "next/image";
import Unique from "../components/Unique";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="">
      {/* <div className="relative"> */}
      <Intro />
      <Unique />
      {/* </div> */}

      {/* <div className="h-screen bg-orange-600 space-y-5"></div> */}
      {/* <div className="h-screen bg-orange-600 space-y-5"></div> */}
      {/* <div className="h-screen bg-orange-600 space-y-5s"></div> */}
    </main>
  );
}
