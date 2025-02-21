
'use client'
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import { GetFileUrl } from "@/lib/utils";
import { getMaxListeners } from "events";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import empAi from "@/assets/course/ai.png"
import Image from "next/image";
import { motion } from "framer-motion";
import CLFooterButton from "./FooterButton";
import { useClassTraining } from "@/context/ClassTrainingContext";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const ClassTrainingList = () => {
    const { courseList } = useClassTraining()
    const locale = useLocale()



    const getGridClasses = (index: number) => {
        return `${index == 0 ? 'md:row-span-2' : (index === 1 ? 'md:row-span-2' : 'md:row-span-1')} ${index === courseList.length - 1 ? 'md:col-span-3' : ''}`
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                courseList.map((item: any, index: number) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        // className={getGridClasses(index)}
                    >
                        <Link href={`/${locale}/classTraining/${item._id}`}>
                            <div key={index} className={`group relative flex flex-col  items-center ${index === 1 ? 'justify-end ' : 'justify-center'} bg-center bg-contain bg-no-repeat  hover:border-primary text-white h-full min-h-80 rounded-2xl overflow-hidden`}
                            >
                                {
                                    item.image ? <Image width={0}
                                        height={0} alt="free" className="group-hover:translate-x-2 transition-all scale-110 w-full  h-full min-h-80 absolute object-cover select-none" src={GetFileUrl(item.image._id)} /> : <Image width={0}
                                            height={0} alt="free" className="group-hover:translate-x-2 transition-all scale-110  w-full h-full min-h-80 absolute object-cover select-none" src={empAi} />
                                }
                                <div style={{ textShadow: '1px 1px 2px black' }} className="group-hover:scale-110 text-center transition-all duration-300 z-10 top-4
                                 min-h-10 text-xl font-semibold rounded-t-lg rounded-b-md flex items-center p-4 rounded-[2rem] max-w-[90%] ">
                                    {item.name}
                                </div>
                                <div style={{ textShadow: '1px 1px 2px black' }} className={`group-hover:translate-y-2 z-10 text-center transition-all duration-300 ${index === 1 ? 'mb-16' : ''}`}>
                                    {item.description.slice(0, 50)}...
                                </div>
                                <div className="cl-training-footer z-30">
                                    <CLFooterButton />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default ClassTrainingList;