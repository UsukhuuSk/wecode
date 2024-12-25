import { useTranslations } from "next-intl"
import React, { useEffect, useState } from "react"
import { Checkbox } from "../../ui/checkbox"
import HugeIcon from "../../ui/HugeIcon"
import { Helper } from "../../../lib/helper"
import { BaseApi } from "../../../api/baseApi"
import { useParams } from "next/navigation"
import { GetFileUrl } from "../../../lib/utils"
import PhotoView from "@/components/ui/photoview"

interface QsProps {
    exam: any;
    onNext: () => any;
    onQuestionFinish: () => any;
    fetching: boolean;
}
export const ExamQuestions: React.FC<QsProps> = ({ fetching, exam, onNext, onQuestionFinish }) => {
    const params = useParams<any>()
    const trns = useTranslations('course.exam')
    const [studentExam, setStudentExam] = useState<any>({})
    const numbers = Array.from({ length: exam.student_exam.question_count }, (_, index) => index + 1);
    const [checkedItems, setCheckedItems] = useState<any>([]);
    const [correctQuestionCount, setCorrectQuestionCount] = useState<any>(exam?.current_question?.count_correct)
    const [loading, setLoading] = useState<boolean>(false)

    const correctQuestionmap: any = {
        "c1": trns('oneAnswer'),
        "c2": trns('twoAnswer'),
        "c3": trns('threeAnswer')
    }

    useEffect(() => {
        if (exam) {
            setStudentExam(exam.student_exam)
            setCheckedItems([])
        }
    }, [exam])

    const isPassed = (index: any) => {
        return index < studentExam.question_index + 1
    }

    const isCurrent = (index: any) => {
        return studentExam.question_index + 1 === index
    }

    const isLast = () => {
        return studentExam.question_count === studentExam.question_index + 1
    }

    const isHaveImage = () => {
        return exam?.current_answers?.some((answer: any) => answer.image !== null);
    }

    const handleCheckboxChange = (id: any) => {
        setCheckedItems((prev: any) => {
            if (prev.includes(id)) {
                return prev.filter((item: any) => item !== id);
            } else if (prev.length < correctQuestionCount) {
                return [...prev, id];
            } else {
                return [...prev.slice(0, prev.length - 1), id];
            }
        });
    };

    const handleNext = async () => {
        try {
            setLoading(true)
            await BaseApi._post('exam/answer', {
                "student_exam_id": studentExam._id,
                "current_question_id": exam?.current_question._id,
                "selected_answer_ids": checkedItems
            })
            Helper.handleSuccess()
            if (isLast()) {
                onQuestionFinish()
            } else {
                onNext()
            }
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    const RenderImage = (img: any) => {

        return <div className="overflow-hidden mt-2 ">
            <PhotoView size={'10rem'} src={GetFileUrl(img._id)}>
            </PhotoView>
            {/*  */}
        </div>
    }

    const QuestionTitle = () => {
        return <div className="border-b border-wcBorder pb-2 flex items-start gap-1">
            <p className="text-xl ">
                {studentExam.question_index + 1}.
            </p>
            <div>
                <div>
                    {exam?.current_question?.image &&
                        <PhotoView size={'20rem'} src={GetFileUrl(exam?.current_question?.image._id)}>
                        </PhotoView>
                    }
                    <p className="text-md md:text-lg lg:text-xl mb-2">
                        {exam?.current_question?.name}
                    </p>
                </div>
                <p className="text-[#FFFFFF50] text-[13px]">
                    {correctQuestionmap['c' + correctQuestionCount]}
                </p>
            </div>
        </div>
    }

    return (
        <div className={`text-white rounded-md ${fetching ? 'animate-pulse' : ''}`}>
            <div className={`flex justify-between mb-6`}>
                {numbers.map((number) => (
                    <div key={number}
                        className={`flex items-center justify-center 
                             h-6 w-6 rounded-full border
                              border-[#FFFFFF50] 
                               ${isCurrent(number) || isPassed(number) ? 'bg-[#22C55E] text-white font-semibold' : 'text-[#FFFFFF50]'} 

                              `}> {isPassed(number) ? <HugeIcon name="check" color="white" /> : number}</div>
                ))}
            </div>
            <div className="p-4 bg-card flex flex-col gap-4 border border-wcBorder rounded-xl">
                {QuestionTitle()}
                <ul className={`grid grid-cols-12    justify-center gap-3`}>
                    {exam?.current_answers.map((a: any) => (
                        <li key={a._id} className={`${isHaveImage() ? 'col-span-6' : 'col-span-12'} hover:bg-[#FFFFFF20] rounded-md px-2 py-1`}   >
                            <div
                                key={a._id}
                                onClick={() => handleCheckboxChange(a._id)}
                            >
                                <div className="flex gap-3 items-center cursor-pointer">
                                    <Checkbox className="border-[2px] border-wcBorder bg-card rounded-[4px]" checked={checkedItems.includes(a._id)} />
                                    <span className="font-normal"> {a.name}</span>
                                </div>
                            </div>
                            {a.image && RenderImage(a.image)}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center md:justify-end">
                    {isLast() ? (
                        <button
                            disabled={loading || fetching}
                            onClick={handleNext}
                            className="bg-green-500 disabled:bg-gray-600 hover:opacity-90 text-white text-sm rounded-xl px-4 py-3 flex items-center gap-2 font-bold"
                        >
                            {!loading && <HugeIcon color="white" name="check" />}
                            {loading ? trns('loading') : trns('finish')}
                        </button>
                    ) : (
                        <button
                            disabled={loading || fetching}
                            onClick={handleNext}
                            className="bg-primary disabled:bg-gray-600 hover:opacity-90 text-white text-sm rounded-xl px-4 py-3 flex items-center gap-2 font-bold"
                        >
                            {!loading && <HugeIcon color="white" name="angleLongRight" />}
                            {loading ? trns('loading') : trns('next')}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}