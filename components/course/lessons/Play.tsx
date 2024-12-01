import { useState } from "react"
import VideoCourse from "../../video/VideoCourse"
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { LessonDetailTabs } from "./DetailTabs";

export const LessonPlay = ({ activeLesson }: any) => {
 

    return (
        <div className="flex flex-col gap-6">
            <VideoCourse id={activeLesson.video_id?._id} />
        </div>
    )
}