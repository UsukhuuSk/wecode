import Image from "next/image";
import { GetThumbnailUrl } from "../../lib/utils";
import { useParams } from "next/navigation";
import Link from "next/link";

const CourseCard = ({ course }: any) => {
  const params = useParams()
  return (
    <Link href={`/${params.locale}/course/${course._id}`}>
      <div
        className="bg-transparent rounded-[32px] overflow-hidden customborder hover:outline hover:outline-1 hover:outline-fuchsia-300 cursor-pointer"
      >
        <div className="overflow-hidden object-cover max-w-[470px] max-h-[190px] rounded-t-[24px]">
          <Image
            src={GetThumbnailUrl(course.image._id)}
            alt="AI for All"
            width={400}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white flex items-center gap-[10px]">
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
              // style={{ borderColor: item.level_id.color }}
              className={`font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px] border-[${course.level_id.color}] text-[${course.level_id.color}]`}
            >
              {course.level_id.name}
            </div>
          </div>
          <h3 className="text-white text-lg font-bold">
            {course.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}
export default CourseCard;