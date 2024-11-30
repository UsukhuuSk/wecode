import Link from "next/link"
import HugeIcon from "../../ui/HugeIcon"
import { useTranslations } from "next-intl";
import { locale } from "moment";
import React from "react";
import { useLesson } from "../../../context/LessonContext";
interface PropLessonItem {
    lesson: any;
    locale: any;
    onPlay?: (data: any) => any
}
export const LessonItem: React.FC<PropLessonItem> = ({ lesson, locale, onPlay }) => {
    const trns = useTranslations("course.detail");
    const { setVideos } = useLesson()
    return (
        <li className="flex items-center justify-between rounded-md hover:bg-card py-1 px-2 cursor-pointer" onClick={()=>setVideos(lesson)}>
            <div className="flex items-center gap-2">
                <HugeIcon name="play" />
                <span className="text-sm">
                    {lesson.name}
                </span>
            </div>
            <div className="text-sm flex justify-between w-[6.5rem] items-center">
                <div className="flex  items-center gap-2">
                    {trns('video')}
                    <div className="inline-block w-1 h-1 rounded-full bg-white"></div>
                </div>
                <span>
                    {lesson?.video_id.duration_seconds} min
                </span>
            </div>
        </li>
    )
}