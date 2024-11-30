"use client";
import React, { useEffect, useState } from "react";
import { courses } from "../../../../../data/dummy";
import { IoIosStar } from "react-icons/io";
import Video from "next-video";
import VideoPlayer from "../../../../../components/Video";
import { BaseApi } from "../../../../../api/baseApi";
import VideoCourse from "../../../../../components/video/VideoCourse";
import { useTranslations } from "next-intl";
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { GetFileUrl, GetThumbnailUrl } from "../../../../../lib/utils";
import { Avatar } from "../../../../../components/ui/avatar";
import HugeIcon from "../../../../../components/ui/HugeIcon";
import CourseTopics from "../../../../../components/course/topics";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function CourseDetail({ params }: { params: { id: number, locale: any } }) {
  const [course, setCourse] = useState<any>(null)
  const [topics, setTopics] = useState<any>([])
  const [teachers, setTeachers] = useState<any>([])
  const trns = useTranslations("course.detail");

  useEffect(() => {
    getCourse()
    getTopics()
  }, [])


  const getCourse = async () => {
    try {
      const data = await BaseApi._get(`9/courses/${params.id}`)
      setCourse(data)
      setTeachers(data.teachers)
    } catch (error) {

    }
  }

  const getTopics = async () => {
    try {
      const { list } = await BaseApi._get(`9/course_topics`, { search: JSON.stringify({ course_id: { op: 'eq', val: params.id } }) })
      setTopics(list)
    } catch (error) {

    }
  }

  return (
    <>
      <div className=" pt-[160px] pb-[80px] h-[580px]" style={{ background: 'linear-gradient(-20deg, #FF7A1B 0%, #C74AF4 25%, #5C58FF 65%)' }}>
        <div className="flex items-center flex-col gap-4 lg:flex-row xl:flex-row 2xl:flex-row container">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-2 text-white">
              <Link href="/" className="hover:underline"> {trns('home')}</Link>
              {<HugeIcon name="arrowRight" />}
              <Link href={`/${params.locale}/course`} className="hover:underline"> {trns('courses')}</Link>
            </div>
            <p className="text-white font-bold text-5xl">
              {course?.name}
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            {
              course?.intro_video_id && <VideoCourse width={500} id={course.intro_video_id._id} locale="mn" />
            }
          </div>
        </div>
      </div>
      <div className="border-b border-slate-600">
        <div className="container">
          <div className="h-20 flex justify-between items-center">
            <div>
              <span className="text-white font-semibold">
                {course?.avg_rate}
              </span>
              <br />
              <span className="text-slate-400 font-medium text-xs">
                {trns("rating")}
              </span>
            </div>
            <div>
              <span className="text-white font-semibold ">
                {course?.duration_seconds}
              </span>
              <br />
              <span className="text-slate-400 font-medium text-xs">
                {trns("length")}
              </span>
            </div>
            <div>
              <span className="text-white font-semibold">
                {course?.level_id?.name}
              </span>
              <br />
              <span className="text-slate-400 font-medium text-xs">
                {trns("level")}
              </span>
            </div>
            <div>
              <span className="text-white font-semibold">
                Online
              </span>
              <br />
              <span className="text-slate-400 font-medium text-xs">
                {trns("access")}
              </span>
            </div>
            <div>
              <span className="text-white font-semibold">
                {course && (course.is_certificate ? trns("certTrue") : trns("certFalse"))}
              </span>
              <br />
              <span className="text-slate-400 font-medium text-xs">
                {trns("completion")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-12 lg:gap-16 xl:gap-20 2xl:gap-20 my-8">
        <div className="flex flex-col gap-8 col-span-12  lg:col-span-8 xl:col-span-8 2xl:col-span-8">
          <div className=" bg-card rounded-xl px-4 py-3 border border-slate-500">
            <p className="text-white leading-8">
              {trns("goal")}
            </p>
            <div className="border-t border-slate-500 pt-4 flex flex-col gap-4">
              {
                course?.learns?.map((c: any) => {
                  return (
                    <div className="text-white flex gap-4 items-center">
                      <div>
                        <HugeIcon name="checkSolid" height={16} width={16} />
                      </div>
                      <p>
                        {c}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className=" bg-card rounded-xl px-4 pb-3 border border-slate-500">
            <p className="text-white leading-8">
              {trns("about")}
            </p>
            <div className="border-t border-slate-500 pt-4 flex flex-col gap-4">
              <span className="text-white">{course?.about}</span>
            </div>
          </div>
          <CourseTopics topics={topics} />
        </div>
        <div className="col-span-12   lg:col-span-4 xl:col-span-4 2xl:col-span-4 text-white">
          <div className="rounded-xl px-4 py-3 bg-[#334155]">
            <div className="text-white border-b border-slate-500 p-2 font-medium">
              {course?.name}
            </div>
            <div className="my-2 text-sm">
              {trns('instructor')}
            </div>
            <div className="grid grid-cols-2 mb-4 gap-2">
              {teachers.map((t: any) => {
                return (
                  <div className="col-span-1  lg:col-span-2 xl:col-span2 2xl:col-span-2 flex gap-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex justify-center items-start bg-gray-900">
                      <img
                        sizes="20px"
                        src={GetFileUrl(t.image)}
                      />
                    </div>
                    <span className="text-sm">
                      {t.full_name}
                    </span>
                  </div>
                )
              })}
            </div>
            <div>
              <button className="bg-primary w-full py-3 rounded-4xl">
                {trns('enroll')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

