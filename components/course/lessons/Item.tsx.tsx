import HugeIcon from "../../ui/HugeIcon"
import { useTranslations } from "next-intl";
import React from "react";
import { useLesson } from "../../../context/LessonContext";
import { PlayIcon, Video01Icon } from "@hugeicons/react";
interface PropLessonItem {
    lesson: any;
    locale: any;
    onPlay?: (data: any) => any;
    topicId: any;
}
export const LessonItem: React.FC<PropLessonItem> = ({ lesson, locale, onPlay, topicId }) => {
    const trns = useTranslations("course.detail");
    const { setVideos, activeLesson } = useLesson()
    const isActive = () => {
        return activeLesson?._id === lesson._id
    }
    return (
        <li className={"flex items-center justify-between rounded-md hover:bg-card py-1 px-2 cursor-pointer " + (isActive() ? "bg-[#FFFFFF10]" : "")} onClick={() => setVideos(lesson, topicId)}>
            <div className="flex items-center gap-2">
                {isActive() ?
                    <PlayIcon width={16} height={16} />
                    :
                    <Video01Icon width={16} height={16} />
                }
                <div className="text-sm max-w-[150px] truncate">
                    {lesson.name}
                </div>
            </div>
            <div className="text-sm flex justify-between w-[6.5rem] items-center">
                <div className="flex  items-center gap-2">
                    {trns('video')}
                    <div className="inline-block w-1 h-1 rounded-full bg-white"></div>
                </div>
                <span>
                    {(Number(lesson?.video_id?.duration_seconds || 0) / 60).toFixed(0)} {trns('min')}
                </span>
            </div>
        </li>
    )
}