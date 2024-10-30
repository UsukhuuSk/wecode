"use client";
import styles from "./style.module.css";
import Image from "next/image";
import bg from "../../assets/background.jpeg";
import intro from "../../assets/intro.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import newBg from "../../assets/LandingPage/1A8BA28B.png";

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
    gsap.to(background.current, {
      clipPath: "inset(0%)", // Animate to the full size
      duration: 1, // Adjust duration as needed
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "+=500px",
        scrub: true, // Disable scrub to prevent reverse animation
        markers: true, // Remove in production
      },
    });
  });
  return (
    <div className={styles.intro}>
      <div ref={background} className={styles.backgroundImage}>
        <Image src={newBg} alt="background image" fill={true} />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src={intro} alt="intro image" fill={true} priority={true} />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  );
}
