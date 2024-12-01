import Link from "next/link";
import HugeIcon from "../ui/HugeIcon";
import VideoCourse from "../video/VideoCourse";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";


export const CourseRolledHeader = ({ course }: any) => {
    const params = useParams()
    const trns = useTranslations("course.detail");
    return (
        <div className="flex flex-col gap-4 lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="flex-1 flex gap-10 items-center ">
                <Link href={`/${params.locale}/course`}>
                    <HugeIcon name="circleArrowLeft" />
                </Link>
                <p className="text-white font-bold text-[2rem] font-neue">
                    {course?.name}
                </p>
            </div>
        </div>
    )
}
