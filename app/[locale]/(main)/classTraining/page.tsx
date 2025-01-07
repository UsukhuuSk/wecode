'use client'
import ClassTrainingList from "@/components/classTraining/List";
import { ReactLenis } from "@/lib/lenis";
import { useTranslations } from "next-intl";
import Image from "next/image";
import purple from "@/assets/landing/purplePlanet.png";
import round from "@/assets/LandingPage/opencircle.png";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const ClassTrainingPage = () => {
    const trns = useTranslations("classTraining")
    return (
        <ReactLenis root>
                <div className="pt-40 pb-20 ">
                    <div className="absolute top-[10%] -left-[10%] -z-50">
                        <Image src={purple} alt="" width={500} height={500} />
                    </div>
                    <div className="text-white  min-h-screen container">
                        <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                        <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                        <h1 className="font-bold text-2xl md:text-[3rem] font-adineue leading-none text-white mb-4">
                            {trns("title")}
                        </h1>
                        <ClassTrainingList />
                    </div>
                </div>
        </ReactLenis>
    )
}

export default ClassTrainingPage;