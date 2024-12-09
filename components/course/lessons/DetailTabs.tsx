import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import HugeIcon from "../../ui/HugeIcon";
import Link from "next/link";
import { DownloadFile, GetFileUrl } from "../../../lib/utils";
import { Helper } from "../../../lib/helper";
import { BaseApi } from "../../../api/baseApi";
import { CourseRatings } from "./Ratings";
import { useLesson } from "@/context/LessonContext";

export const LessonDetailTabs = ({ course }: any) => {
    const trns = useTranslations("course.detail");
    const { activeLesson } = useLesson();
    const [tabValue, setTabValue] = useState<any>("transcript")
    const [tabs, setTabs] = useState<any>([
        { value: 'transcript', label: trns('transcript') },
        { value: 'tasks', label: trns('tasks') },
        { value: 'download', label: trns('download') },
        { value: 'ratings', label: trns('ratings') },

    ])


    return (
        <div className="mb-6">
            <div className="flex mb-6">
                {tabs.map((t: any, i: number) => {
                    return (
                        <div key={i} onClick={() => setTabValue(t.value)}
                            className={"cursor-pointer hover:bg-cardDark flex-1 text-center font-neue border-b-[3px] text-white py-2 " +
                                (tabValue === t.value ? "border-b-primary font-semibold" : "border-b-wcSlate font-normal")}>
                            {t.label}
                        </div>
                    )
                })}
            </div>
            {
                tabValue === 'transcript' && <ul className="text-white bg-cardDark rounded-xl border border-wcBorder p-4 flex flex-col gap-4">
                    {
                        course.learns.map((l: any, i: number) => {
                            return (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <HugeIcon name="checkSolid" />
                                    {l}
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                tabValue === 'tasks' && <div className="text-white bg-cardDark rounded-xl border border-wcBorder p-4">
                    {'Тун удахгүй'}
                </div>
            }
            {
                tabValue === 'download' && <ul className="text-white bg-cardDark rounded-xl border border-wcBorder p-4 flex flex-col gap-4">
                    {(!activeLesson || activeLesson.files && !activeLesson.files.lenth) && trns("noFile")}
                    {
                        activeLesson && activeLesson.files && activeLesson.files.length > 0 && activeLesson.files.map((l: any, i: number) => {
                            return (
                                <li key={i} className="flex items-center gap-2 text-sm ">
                                    <HugeIcon name="attachment" />
                                    <span onClick={() => DownloadFile(GetFileUrl(l._id))} className="hover:underline cursor-pointer" >
                                        {l.originalname}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                <div style={{ display: tabValue !== 'ratings' ? "none" : "" }} className="text-white bg-cardDark rounded-xl border border-wcBorder p-4">
                    <CourseRatings course={course} />
                </div>
            }
        </div>
    )
}