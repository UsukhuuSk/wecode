import { GetThumbnailUrl } from "../../lib/utils";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
const CourseCard = ({ course, children }: any) => {
  const params = useParams()
  const trns = useTranslations('profile')
  return (
    <Link href={`/${params.locale}/course/${course._id}`}>
      <div
        className="relative bg-transparent rounded-[20px] border border-slate-600 overflow-hidden hover:outline hover:outline-1 hover:outline-primary cursor-pointer"
      >
        <div className="relative overflow-hidden object-cover w-full h-[150px] lg:h-[150px] xl:h-[190px] rounded-t-[20px] bg-wcSlate700">
          <img
            src={GetThumbnailUrl(course.image._id)}
            alt="AI for All"
            className="object-cover w-full h-full " />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-wcSlate400 font-normal text-sm flex items-center text-sm 2xl:text-base gap-[4px] xl:gap-[10px]">
              {/* {item.teachers.map((item: any, index: number) => (
                <span key={index}>{item.given_name}</span>
              ))}{" "} */}
              <span className="">
                {" "}
                {course.teachers[0].given_name}
              </span>
              <span>•</span>
              { (course.duration_seconds / 60 / 60).toFixed(1) } {trns('hours')}
            </span>
            {/* <Badge className="bg-green-600 text-white">
              Introductory
            </Badge> */}
            {children ? children : <></>}
            <div
              style={{ borderColor: course.level_id.color, background: course.level_id.color }}
              className={` absolute top-5 right-5 font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px] text-white`}
            >
              {course.level_id.name}
            </div>
          </div>
          <h3 className="text-white text-sm lg:text-base xl:text-lg font-bold">
            {course.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}
export default CourseCard;