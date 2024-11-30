import { useTranslations } from "next-intl";
import { useState } from "react";
import HugeIcon from "../../ui/HugeIcon";
import TopicItem from "./Item";

const CourseTopics = ({ topics }: any) => {
    const trns = useTranslations("course.detail");
    return (
        <div>
            <p className="text-white border-b border-slate-500 mb-6 py-3">
                {trns("content")}
            </p>
            <div className="flex flex-col gap-4">
                {
                    topics.map((t: any, index: number) => {
                        return <TopicItem key={index} topic={t} index={index} />
                    })
                }
            </div>
        </div>
    )
}

export default CourseTopics;