"use client"
import React, { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { BaseApi } from "../../api/baseApi";
import VideoCourse from "../video/VideoCourse";
import CourseTopics from "./topics";
import { GetFileUrl } from "../../lib/utils";
import { CourseMainInfo } from "./MainInfo";
import { CourseGoal } from "./CourseGoal";
import { CourseAbout } from "./CourseAbout";
import { CourseInstructor } from "./CourseInstructor";
import CourseGuestHeader from "./GuestHeader";
import { CourseRolledHeader } from "./RolledHeader";
import { useLesson } from "../../context/LessonContext";
import { LessonPlay } from "./lessons/Play";
import { LessonDetailTabs } from "./lessons/DetailTabs";
import { CourseExam } from "./exam/Exams";
import { useAuth } from "@/context/AuthContext";
import { PlayIcon } from "@hugeicons/react";


export default function PageCourse({ courseData, params }: any) {
    const trns = useTranslations("course.detail");
    const topicRef = useRef<any>(null)
    const { user, loaded } = useAuth()
    const [topics, setTopics] = useState<any>([])
    const [teachers, setTeachers] = useState<any>([])
    const [course, setCourse] = useState<any>({})
    const [enrolled, setEnrolled] = useState<boolean>(false)
    const { activeLesson } = useLesson()
    const [openMiniMenu, setOpenMiniMenu] = useState<boolean>(false)
    useEffect(() => {
        getTopics()
        setCourse(courseData)
        setTeachers(courseData.teachers)
        setEnrolled(courseData.enrolled)
    }, [courseData])
    useEffect(() => {
        setOpenMiniMenu(false)
    }, [activeLesson])
    useEffect(() => {
        if (loaded && !user) {
            setEnrolled(false)
        }
    }, [loaded])


    const getTopics = async () => {
        try {
            const list = await BaseApi._get(`list/9/service_inline_topics`, { course_id: params.id })
            setTopics(list)
        } catch (error) {

        }
    }

    const handleEnroll = () => {
        setEnrolled(true)
    }

    return (
        <div className="pb-8">
            {!enrolled && <CourseGuestHeader course={course} />}
            {!enrolled && <div className="border-b border-slate-600 mb-8">
                <div className=" md:hidden my-8 mx-4">
                    <CourseInstructor course={course} teachers={teachers} enrolled={enrolled} onChange={handleEnroll} />
                </div>
                <CourseMainInfo course={course} />

            </div>}
            {
                !enrolled ?
                    <div className="container grid grid-cols-12 lg:gap-16 xl:gap-20 2xl:gap-20">
                        <div className="flex flex-col gap-8 col-span-12  lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                            <CourseGoal course={course} />
                            <CourseAbout course={course} />
                            <CourseTopics enrolled={enrolled} topics={topics} />
                        </div>
                        <div className="hidden mt-8 lg:mt-0 md:block col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-white">
                            <CourseInstructor course={course} teachers={teachers} enrolled={enrolled} onChange={handleEnroll} />
                        </div>
                    </div>
                    :
                    <div className="container grid grid-cols-12 lg:gap-8 xl:gap-8 2xl:gap-8  pt-20">
                        <div className="col-span-12 ">
                            <CourseRolledHeader course={course} />
                        </div>
                        <div className="flex flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-8">
                            {activeLesson ? <LessonPlay activeLesson={activeLesson} course={course} /> :
                                course.intro_video_id?._id ? <VideoCourse id={course.intro_video_id._id} course_id={course._id} locale="mn" /> :
                                    <img src={GetFileUrl(course.image._id)} className="rounded-xl overflow-hidden aspect-video"></img>
                            }
                            <div className="md:hidden flex gap-2">
                                <button onClick={() => setOpenMiniMenu((prev) => !prev)} className="text-white h-10 w-10 flex items-center justify-center rounded-full bg-[#FFFFFF10]">
                                    <HamburgerMenuIcon height={24} width={24} />
                                </button>
                                <div className="h-10 w-full bg-[#FFFFFF10] rounded-[32px] flex items-center justify-between px-4 text-white">
                                    <div className="flex items-center">
                                        <PlayIcon variant="duotone" /><p className="text-white text-sm font-semibold font-neue text-nowrap max-w-[160px] truncate">
                                            {activeLesson ? activeLesson.name : course.intro_video_id.name}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-[#CBD5E1] gap-2 text-sm">
                                        <div className="flex  items-center gap-2 ">
                                            {trns('video')}
                                        </div>
                                        <div className="inline-block w-1 h-1 rounded-full bg-white"></div>
                                        <span>
                                            {activeLesson ? activeLesson.video_id.duration_seconds : course.intro_video_id.duration_seconds} min
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <LessonDetailTabs course={course} />
                        </div>
                        <div className="col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-white">
                            <CourseInstructor course={course} teachers={teachers} enrolled={enrolled} onChange={handleEnroll} />
                            <div ref={topicRef} className={`${openMiniMenu ? 'z-[999] block fixed inset-0 bg-[#000000eb] backdrop-blur-sm overflow-auto h-[100vh] px-4 pt-[72px] pb-4' : 'hidden'} md:block transition-all`}>
                                <CourseTopics enrolled={enrolled} openMiniMenu={openMiniMenu} topics={topics} onClose={() => setOpenMiniMenu(false)} />
                                <CourseExam course={course} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

