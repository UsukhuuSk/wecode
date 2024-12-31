'use client'
import ClassTrainingList from "@/components/classTraining/List";
import { useTranslations } from "next-intl";

const ClassTrainingPage = () => {
    const trns = useTranslations("classTraining")
    return (
        <div className="pt-40 pb-20">
            <div className="text-white  min-h-screen container">
                <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                <h1 className="font-bold text-2xl md:text-[3rem] font-adineue leading-none text-white mb-4">
                    {trns("title")}
                </h1>
                <ClassTrainingList />
            </div>
        </div>
    )
}

export default ClassTrainingPage;