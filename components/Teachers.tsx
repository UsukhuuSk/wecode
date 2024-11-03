import React from "react";
import first from "../assets/LandingPage/7.svg";
import second from "../assets/LandingPage/8.svg";
import third from "../assets/LandingPage/2.svg";
import fourth from "../assets/LandingPage/11.svg";
import fifth from "../assets/LandingPage/12.svg";
import Image from "next/image";
import { teachers } from "../data/dummy";
import TeacherCard from "./TeacherCard";
import { motion } from "framer-motion";

export default function Teachers() {
  return (
    <div className=" m-auto">
      <div className=" m-auto">
        <span className="teachGrad ovsoge font-bold text-[64px] text-center flex justify-center">
          Our team
        </span>
      </div>

      <motion.div
        className="flex justify-center m-auto mt-16 gap-14"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            name={teacher.name}
            image={teacher.image}
            profession={teacher.profession}
          />
        ))}
      </motion.div>
    </div>
  );
}
