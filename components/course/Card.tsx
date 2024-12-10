import { GetThumbnailUrl } from "../../lib/utils";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseCard = ({ course }: any) => {
  const params = useParams()

  return (
    <Link href={`/${params.locale}/course/${course._id}`}>
      <div
        className="bg-transparent rounded-[32px] overflow-hidden customborder hover:outline hover:outline-1 hover:outline-primary cursor-pointer"
      >
        <div className="relative overflow-hidden object-cover w-full lg:h-[120px] xl:h-[190px] rounded-t-[24px] bg-wcSlate700">
          <img
            src={GetThumbnailUrl(course.image._id)}
            alt="AI for All"
            className="object-cover w-full" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white flex items-center text-sm 2xl:text-base  gap-[4px] xl:gap-[10px]">
              {/* {item.teachers.map((item: any, index: number) => (
                <span key={index}>{item.given_name}</span>
              ))}{" "} */}
              <span>
                {" "}
                {course.teachers[0].given_name}
              </span>
              <span>•</span>
              {(
                Math.round((course.duration_seconds / 3600) * 2) /
                2
              ).toFixed(1)}{" "}
              hours
            </span>
            {/* <Badge className="bg-green-600 text-white">
              Introductory
            </Badge> */}
            <div
              style={{ borderColor: course.level_id.color, color: course.level_id.color }}
              className={`font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px]`}
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