import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
interface TeacherProps {
  name: string;
  image: any;
  role: string;
  profession: string;
  experience: string;
  className: any;
}
const TeacherCard: React.FC<TeacherProps> = ({
  name,
  image,
  role,
  profession,
  experience,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "card flex flex-col items-center w-[284px] h-[360px] bg-[#160A35] rounded-3xl",
        className
      )}
    >
      <div className="w-[284px] h-[217px] overflow-hidden gradBorder rounded-t-3xl">
        <Image src={image} alt="" fill objectFit="cover" />
      </div>
      <h1>{name}</h1>
      <h3></h3>
      <h3></h3>
      <div className=""></div>
    </motion.div>
  );
};
export default TeacherCard;
