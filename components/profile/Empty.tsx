import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import BooksSvg from "@/assets/books.svg"

export const CourseEmpty = () => {
    const trns = useTranslations('profile')

    return (
        <div className="py-6 flex flex-col justify-center items-center gap-5 border border-[#404047] rounded-3xl bg-[#13032b40]">
            <Image alt={"logo"} height={40} width={40} src={BooksSvg} />
            <p className="text-white text-2xl font-neue font-semibold">{trns('yourJourney')}</p>
            <p className="text-wcSlate400 font-neue font-normal text-sm w-[60%] text-center">{trns('yourJourneyDesc')}</p>
            <Link href={"/courses"}>
                <button className="bg-primary hover:opacity-80 rounded-[32px] px-6 py-3 text-base font-semibold font-neue text-white">{trns('browseCourses')}</button>
            </Link>
        </div>
    )
}