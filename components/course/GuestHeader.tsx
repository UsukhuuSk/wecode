import Link from "next/link";
import HugeIcon from "../ui/HugeIcon";
import VideoCourse from "../video/VideoCourse";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";


export const CourseGuestHeader = ({ course }: any) => {
    const params = useParams()
    const trns = useTranslations("course.detail");
    return (
        <div className="pt-[160px] pb-[80px] h-[580px]" style={{ background: 'linear-gradient(-20deg, #FF7A1B 0%, #C74AF4 25%, #5C58FF 65%)' }}>
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
    )
}

export default CourseGuestHeader;