import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Helper } from "../../../lib/helper"
import { BaseApi } from "../../../api/baseApi"
import { ExamItem } from "./Items"
import { ArrowDown01Icon, BookEditIcon } from "@hugeicons/react"

export const CourseExam = ({ course }: any) => {
    const [open, setOpen] = useState<boolean>(false)
    const trns = useTranslations('course.detail')
    const [examItems, setExamItems] = useState<any>([])

    useEffect(() => {
        getList()
    }, [])
    const handleOpen = () => {
        setOpen(!open)
    }
    const getList = async () => {
        try {
            const data = await BaseApi._get('/list/9/service_course_exams', { course_id: course._id })
            setExamItems(data)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <div className=" md:bg-cardDark rounded-xl md:border border-wcBorder mt-4 ">
            <div onClick={handleOpen} className="flex items-center gap-4  px-4 py-3 justify-between cursor-pointer hover:bg-card">
                <div className="flex items-center gap-2">
                    <BookEditIcon height={20} width={20} className="text-red-500" variant="duotone" />
                    <div className=" flex flex-col gap-4">
                        <span className="text-white">{trns("exam")}</span>
                    </div>
                </div>
                <ArrowDown01Icon/>
            </div>
            <div className={"oveflow-hidden transition-all " + (open ? '' : "h-0")}>
                <ul className={" " + (!open ? 'hidden' : 'px-3 pb-3')}>
                    {
                        examItems.map((item: any, i: number) => <ExamItem key={i} courseId={course._id} exam={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}