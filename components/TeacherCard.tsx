import Image from "next/image";
import React, { useState } from "react";
import { cn, GetFileUrl } from "../lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
// interface TeacherProps {
//   name: string;
//   image: any;
//   profession: string;
// }
const TeacherCard = ({ name, image, profession, linkedin }: any) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };
  return (
    <motion.div
      className={cn(
        `card flex relative flex-col items-center bg-slate-600  h-[360px] rounded-3xl ${isLoading ? 'animate-pulse' : ''}`
      )}
    >
      <Image
        onLoad={handleImageLoad}
        onError={handleImageError}
        src={GetFileUrl(image?._id)}
        alt=""
        className="w-full h-full object-cover rounded-3xl "
        width={200}
        height={400}
      />

      <div className="absolute bottom-[5%] left-[5%] z-20 text-start flex flex-col items-start justify-start">
        <h1 className="font-manrope text-[18px] font-extrabold text-white">
          {name}
        </h1>
        <span className="font-manrope text-[14px] font-medium text-white">
          {profession}
        </span>
        {
          linkedin && <Link href={linkedin} className="font-manrope text-[14px] font-medium text-white" target="_blank">
            {linkedin}
          </Link>
        }
      </div>
      <div className="absolute bottom-0 cardText w-full z-10 h-[35px] rounded-b-3xl"></div>
    </motion.div>
  );
};
export default TeacherCard;
