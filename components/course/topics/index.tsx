import { useTranslations } from "next-intl";
import { useState } from "react";
import HugeIcon from "../../ui/HugeIcon";
import TopicItem from "./Item";
import { Cancel01Icon } from "@hugeicons/react";

const CourseTopics = ({ topics, onClose, openMiniMenu }: any) => {
    const trns = useTranslations("course.detail");
    return (
        <div>
            <p className={`flex justify-between items-center mb-6 py-3  font-neue ${openMiniMenu ? 'text-2xl font-semibold' : ''}  md:font-normal md:text-base text-white md:border-b border-slate-500 `}>
                {trns("content")}
                {
                    openMiniMenu &&
                    <button onClick={onClose} className="h-9 w-9 flex md:hidden items-center justify-center bg-[#FFFFFF20] rounded-full">
                        <Cancel01Icon />
                    </button>
                }
            </p>
            <div className="flex flex-col gap-4">
                {
                    topics.map((t: any, index: number) => {
                        return <TopicItem key={index} topic={t} index={index} openMiniMenu={openMiniMenu} />
                    })
                }
            </div>
        </div>
    )
}

export default CourseTopics;