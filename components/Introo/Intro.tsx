"use client";
import styles from "./style.module.css";
import Image from "next/image";
// import bg from "../../assets/background.jpeg";
import intro from "../../assets/intro.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import newBg from "../../assets/LandingPage/1A8BA28B.png";
import bg from "../../assets/LandingPage/background.png";

export default function Intro() {
  const background = useRef(null);
  const introImage = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: "top",
  //       end: "+=500px",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   timeline
  //     .from(background.current, { clipPath: `inset(15%)` })
  //     .to(introImage.current, { height: "200px" }, 0);
  // }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the background image
    // gsap.to(background.current, {
    //   clipPath: "inset(0%)",
    //   duration: 1,
    //   borderRadius: "0px",
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: "top top",
    //     end: "+=500px",
    //     scrub: true,
    //   },
    // });
    gsap.fromTo(
      background.current,
      {
        clipPath: "inset(5%)", // Initial clipped state
        borderRadius: "24px", // Initial border radius
      },
      {
        clipPath: "inset(0%)",
        borderRadius: "0",
        duration: 1,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=500px",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="relative h-screen w-full">
      <div className={styles.intro}>
        <div ref={background} className={styles.backgroundImage}>
          <Image
            src={bg}
            alt="background image"
            fill={true}
            // className="rounded-3xl"
          />
        </div>
        <div>
          <div
            ref={introImage}
            data-scroll
            data-scroll-speed="0.3"
            // className={styles.introImage}
          >
            {/* <Image src={intro} alt="intro image" fill={true} priority={true} /> */}
          </div>
          {/* <h1 data-scroll data-scroll-speed="0.7">
          SMOOTH SCROLL
          </h1> */}
        </div>
      </div>
    </div>
  );
}
