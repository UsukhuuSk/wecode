import { useEffect, useState } from "react";
import { BaseApi } from "../../../api/baseApi";
import HugeIcon from "../../ui/HugeIcon";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { LessonItem } from "./Item.tsx";



const TopicLessons = ({ topicId,onPlay }: any) => {
    const params = useParams()
    const [lessons, setLessons] = useState<any>([])
    const trns = useTranslations("course.detail");

    useEffect(() => {
        getLessons()
    }, [])
    const getLessons = async () => {
        try {
            const { LESSONS } = await BaseApi._get(`9/course_topics/${topicId}`)
            setLessons(LESSONS)
        } catch (error) {

        }
    }

    return (
        <ul className="flex flex-col gap-1 text-white pl-6">
            {
                lessons.map((l: any, index: number) => {
                    return (
                        <LessonItem key={index} lesson={l} locale={params.locale} topicId={topicId}/>
                    )
                })
            }
        </ul>
    )
}
export default TopicLessons;