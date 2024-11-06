import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
// interface TeacherProps {
//   name: string;
//   image: any;
//   profession: string;
// }
const TeacherCard = ({ name, image, profession }: any) => {
  return (
    <motion.div
      className={cn(
        "card flex relative flex-col  items-center w-[284px] h-[360px] bg-[#160A35] rounded-3xl"
      )}
    >
      <Image
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-3xl "
      />

      <div className="absolute bottom-[5%] left-[5%] z-20 text-start flex flex-col items-start justify-start">
        <h1 className="font-manrope text-[18px] font-extrabold">{name}</h1>
        <span className="font-manrope text-[14px] font-medium">
          {profession}
        </span>
      </div>
      <div className="absolute bottom-0 cardText w-full  z-10 h-[305px] rounded-b-3xl"></div>
    </motion.div>
  );
};
export default TeacherCard;
