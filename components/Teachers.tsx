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
      <div className="flex justify-between max-w-[1280px] m-auto">
        <span className="teachGrad ovsoge font-bold text-[64px]  flex justify-start">
          Our teachers
        </span>
        <div className="flex items-center gap-4">
          <Image src={first} alt="" width={32} height={32} />
          <Image src={second} alt="" width={32} height={32} />
          <Image src={third} alt="" width={32} height={32} />
          <Image src={fourth} alt="" width={32} height={32} />
          <Image src={fifth} alt="" width={32} height={32} />
        </div>
      </div>

      <motion.div
        className="flex justify-center m-auto mt-16"
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
            role={teacher.role}
            profession={teacher.profession}
            experience={teacher.experience}
            className={`card ${index % 2 === 0 ? "even" : "odd"}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
