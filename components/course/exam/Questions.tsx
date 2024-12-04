import { useTranslations } from "next-intl"
import React, { useEffect, useState } from "react"
import { Checkbox } from "../../ui/checkbox"
import HugeIcon from "../../ui/HugeIcon"
import { Helper } from "../../../lib/helper"
import { BaseApi } from "../../../api/baseApi"
import { useParams } from "next/navigation"
import { GetFileUrl } from "../../../lib/utils"

interface QsProps {
    exam: any,
    onNext: () => any
}
export const ExamQuestions: React.FC<QsProps> = ({ exam, onNext }) => {
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
            if (isCompleted()) {
                await BaseApi._get('exam/finish', {
                    "course_id": parseInt(params.id),
                    "exam_id": parseInt(params.exam)
                })
            } else {
                await BaseApi._post('exam/answer', {
                    "student_exam_id": studentExam._id,
                    "current_question_id": exam?.current_question._id,
                    "selected_answer_ids": checkedItems
                })
            }
            Helper.handleSuccess()
            onNext()
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    const isCompleted = () => {
        return studentExam.is_completed
    }

    return (
        <div className="text-white rounded-md">
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
                <div className="border-b border-wcBorder pb-2 flex items-start gap-1">
                    <p className="text-xl ">
                        {studentExam.question_index + 1}.
                    </p>
                    <div>
                        <div>
                            {exam?.current_question?.image && <img className="w-80" src={GetFileUrl(exam?.current_question?.image._id)} />}
                            <p className="text-xl mb-2">
                                {exam?.current_question?.name}
                            </p>
                        </div>
                        <p className="text-[#FFFFFF50] text-[13px]">
                            {correctQuestionmap['c' + correctQuestionCount]}
                        </p>
                    </div>
                </div>
                <ul className="flex flex-col justify-center gap-4">
                    {exam?.current_answers.map((a: any) => (
                        <li
                            key={a._id}
                            className="flex gap-3 items-center cursor-pointer"
                            onClick={() => handleCheckboxChange(a._id)}
                        >
                            <Checkbox className="border-[2px] border-wcBorder bg-card rounded-[4px]" checked={checkedItems.includes(a._id)} />
                            <span className="font-normal"> {a.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <button disabled={loading} onClick={handleNext}
                        className={`${isCompleted() ? 'bg-green-500' : 'bg-primary'} disabled:bg-gray-600 hover:opacity-90 text-white text-sm rounded-xl px-4 py-3 flex items-center gap-2 font-bold`}>
                        {!loading && isCompleted() && <HugeIcon color="white" name="check" />}
                        {loading ? trns('loading') : (isCompleted() ? trns('finish') : trns('next'))}
                        {!loading && !isCompleted() && <HugeIcon color="white" name="angleLongRight" />}
                    </button>
                </div>
            </div>
        </div>
    )
}