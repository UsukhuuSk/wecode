"use client"
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Video from "next-video";

import { useTranslations } from "next-intl";
import { CheckCircledIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import HugeIcon from "../../ui/HugeIcon";
import { ExamQuestions } from "./Questions";
import { BaseApi } from "../../../api/baseApi";
import { useParams } from "next/navigation";
import { Helper } from "../../../lib/helper";
import { useRouter } from "next/navigation";
import { InfoDialog } from "./InfoDialog";



export default function ExamClientPage() {
    const params = useParams()
    const trns = useTranslations('course.exam')
    const [exam, setExam] = useState<any>()
    const [examDetail, setExamDetail] = useState<any>()
    const [studentExam, setStudentExam] = useState<any>()
    const [remaining, setRemaining] = useState(0)
    const [fetching, setFetching] = useState<boolean>(false)
    const router = useRouter()
    const [info, setInfo] = useState<any>(null)

    useEffect(() => {
        getExam()
        getDetail()
    }, [])

    useEffect(() => {
        if (remaining <= 0) return;

        const interval = setInterval(() => {
            setRemaining(prevSeconds => {
                if (typeof prevSeconds === 'number' && prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [remaining]);


    const getDetail = async () => {
        try {
            const det = await BaseApi._get('one/9/service_course_exams', { course_id: params.id, search: JSON.stringify({ _id: params.exam }) })
            setExamDetail(det)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const handleFinish = async () => {
        await BaseApi._get('exam/finish', {
            "course_id": params.id,
            "exam_id": params.exam
        })
    }


    const getExam = async () => {
        try {
            setFetching(true);
            const data = await BaseApi._get('exam', { course_id: params.id, exam_id: params.exam })
            setExam(data)
            setStudentExam(data.student_exam)
            setRemaining(data.student_exam?.left_second)
            if(data.student_exam.is_passed) {
                setInfo({
                    type: 'passed',
                    score: {
                        percent: data.student_exam.percent_student,
                        dateCompleted: data.student_exam.completed_date,
                        student_exam_id: data.student_exam._id
                    }
    
                })
                handleFinish()
            }
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setFetching(false);
        }
    }

    const handleRefresh = async () => {
        try {
            const data = await BaseApi._get('exam', { course_id: params.id, exam_id: params.exam })
            setExam(data)
            setStudentExam(data.student_exam)
            setRemaining(data.student_exam?.left_second)
        } catch (error) {
            Helper.handleError(error)
        }
    }


    const handleNext = () => {
        handleRefresh()
    }

    const handleGiveup = async () => {
        try {
            await handleFinish()
            setInfo({
                type: 'giveup',
              
            })
        } catch (error) {
            Helper.handleError(error)
        }
    }


    const RenderRemaining = () => {
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;

        return <button className="bg-primary rounded-xl text-white text-[28px] font-bold py-3 px-8">
            {remaining > 0 ? (<>{hours}:{minutes}:{seconds < 10 ? "0" + seconds : seconds}</>) : "-"}
        </button>
    }



    if (fetching) {
        return (
            <div className="container mt-20 animate-pulse">
                <div className="flex flex-col gap-4 ">
                    <div className="flex-1 flex gap-10 items-center ">
                        <div className="h-6 w-6 rounded-full">

                        </div>
                        <div className=" h-12 w-60 rounded-md">
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 font-neue">
                        <div className="bg-wcBorder col-span-4 p-4 rounded-xl">
                            <div className="text-white font-neue h-[38px] border-b border-b-slate-500 mb-4">
                                <div className="bg-slate-500 h-5 w-60 rounded-md" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-white">
                                <div>
                                    <div className="bg-slate-500 h-5 w-20 mb-2 rounded-md" />
                                    <div className="bg-slate-500 h-4 w-20 rounded-md" />
                                </div>
                                <div>
                                    <div className="bg-slate-500 h-5 w-20 mb-2 rounded-md" />
                                    <div className="bg-slate-500 h-4 w-20 mb-2 rounded-md" />
                                </div>
                                <div>
                                    <div className="bg-slate-500 h-5 w-20 mb-2 rounded-md" />
                                    <div className="bg-slate-500 h-4 w-20 mb-2 rounded-md" />
                                </div>

                                <div>
                                    <div className="bg-slate-500 h-5 w-20 mb-2 rounded-md" />
                                    <div className="bg-slate-500 h-4 w-20 rounded-md" />
                                </div>
                                <div className="col-span-2 flex flex-col gap-2">
                                    <div className="bg-slate-500 h-3 w-full rounded-md" />
                                    <div className="bg-slate-500 h-3 w-[65%] rounded-md" />
                                    <div className="bg-slate-500 h-3 w-[78%] rounded-md" />
                                </div>
                                <div className="col-span-2 flex flex-col items-center gap-2">
                                    <div className="bg-slate-500 h-10 w-14 rounded-md" />
                                    <div className="bg-slate-500 h-3 w-20 rounded-md" />
                                </div>
                            </div>

                        </div>
                        <div className="col-span-8 text-white">
                            <div className="h-8 bg-slate-500 rounded-md"></div>
                            <div className=" mt-4 h-60 bg-slate-500 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mt-20">
                <InfoDialog info={info} />
                <div className="flex flex-col gap-4 ">
                    <div className="flex-1 flex gap-10 items-center ">
                        <button onClick={() => router.back()}>
                            <HugeIcon name="circleArrowLeft" />
                        </button>
                        <p className="text-white font-bold text-[2rem] font-neue">
                            {examDetail?.name}
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-6 font-neue">
                        <div className="bg-wcBorder col-span-4 p-4 rounded-xl">
                            <div className="text-white font-neue h-[38px] border-b border-b-slate-500 mb-4">
                                {trns('instruction')}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-white">
                                <div>
                                    <p className="text-wcSlate400 text-sm mb-1">{trns('duration')}</p>
                                    <span>{examDetail?.moment_duration}</span>
                                </div>

                                <div>
                                    <p className="text-wcSlate400 text-sm mb-1">{trns('questions')} </p>
                                    <span>{studentExam?.question_count}</span>
                                </div>
                                <div>
                                    <p className="text-wcSlate400 text-sm mb-1"> {trns('passConditions')}</p>
                                    <span>{examDetail?.pass_point}</span>

                                </div>

                                <div>
                                    <p className="text-wcSlate400 text-sm mb-1">{trns('condition')}</p>
                                    <span>{examDetail?.pass_point}</span>
                                </div>
                                <div className="col-span-2">
                                    <span>
                                        {examDetail?.description}
                                    </span>
                                </div>
                                <div className="col-span-2 text-center">
                                    {
                                        RenderRemaining()
                                    }
                                    <div>
                                        <button className="bold font-adineue text-wcRed mt-3" onClick={handleGiveup}>{trns('giveup')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 text-white">
                            {
                                exam && <ExamQuestions exam={exam} onNext={handleNext} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

