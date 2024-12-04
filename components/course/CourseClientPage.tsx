"use client"
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Video from "next-video";

import { useTranslations } from "next-intl";
import { CheckCircledIcon } from "@radix-ui/react-icons"

import Link from "next/link";
import { useParams } from "next/navigation";
import { BaseApi } from "../../api/baseApi";
import HugeIcon from "../ui/HugeIcon";
import VideoCourse from "../video/VideoCourse";
import CourseTopics from "./topics";
import { GetFileUrl } from "../../lib/utils";
import { CourseEnroll } from "./Enroll";
import { CourseMainInfo } from "./MainInfo";
import { CourseGoal } from "./CourseGoal";
import { CourseAbout } from "./CourseAbout";
import { CourseInstructor } from "./CourseInstructor";
import CourseGuestHeader from "./GuestHeader";
import { CourseRolledHeader } from "./RolledHeader";
import { LessonProvider, useLesson } from "../../context/LessonContext";
import { LessonPlay } from "./lessons/Play";
import { LessonDetailTabs } from "./lessons/DetailTabs";
import { CourseExam } from "./exam/Exams";


export default function CourseClientPage({ courseData, params }: any) {
    const [topics, setTopics] = useState<any>([])
    const [teachers, setTeachers] = useState<any>([])
    const trns = useTranslations("course.detail");
    const [course, setCourse] = useState<any>({})
    const [enrolled, setEnrolled] = useState<boolean>(false)
    const { activeLesson } = useLesson()
    useEffect(() => {
        getTopics()
        setCourse(courseData)
        setTeachers(courseData.teachers)
        setEnrolled(courseData.enrolled)
    }, [course])


    const getTopics = async () => {
        try {
            const { list } = await BaseApi._get(`9/course_topics`, { search: JSON.stringify({ course_id: { op: 'eq', val: params.id } }) })
            setTopics(list)
        } catch (error) {

        }
    }

    const handleEnroll = () => {
        setEnrolled(true)
    }

    return (
        <div className="">
            {!enrolled && <CourseGuestHeader course={course} />}
            {!enrolled && <div className="border-b border-slate-600">
                <CourseMainInfo course={course} />

            </div>}
            {
                !enrolled ?
                    <div className="container grid grid-cols-12 lg:gap-16 xl:gap-20 2xl:gap-20 my-8">
                        <div className="flex flex-col gap-8 col-span-12  lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                            <CourseGoal course={course} />
                            <CourseAbout course={course} />
                            <CourseTopics topics={topics} />
                        </div>
                        <div className="col-span-12   lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-white">
                            <CourseInstructor course={course} teachers={teachers} enrolled={enrolled} onChange={handleEnroll} />
                        </div>
                    </div>
                    :
                    <div className="container grid grid-cols-12 lg:gap-8 xl:gap-14 2xl:gap-14 mb-8 mt-20">
                        <div className="col-span-12 ">
                            <CourseRolledHeader course={course} />
                        </div>
                        <div className="flex flex-col gap-4 col-span-12  lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                            {activeLesson ? <LessonPlay activeLesson={activeLesson} /> : <VideoCourse id={course.intro_video_id._id} locale="mn" />}
                            <LessonDetailTabs course={course}/>
                        </div>
                        <div className="col-span-12  lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-white">
                            <CourseInstructor course={course} teachers={teachers} enrolled={enrolled} onChange={handleEnroll} />
                            <CourseTopics topics={topics} />
                            <CourseExam course={course}/>
                        </div>
                    </div>
            }
        </div>
    );
}

