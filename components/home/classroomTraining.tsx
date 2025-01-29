
import Link from "next/link";
import twelve from "@/assets/LandingPage/12.svg";
import Image
    from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CommunityForm from "../community/form";
import { Helper } from "@/lib/helper";
import { BaseApi } from "@/api/baseApi";
import { GetFileUrl } from "@/lib/utils";
import SafeHtmlContent from "../SafeHtmlContent";
const ClassroomTraining = () => {
    const { locale } = useParams()
    const refForm = useRef<any>(null);
    const isEn = () => locale === 'en'
    const [course, setCourse] = useState<any>(null)
    const [htmlContent, setHtmlContent] = useState<any>(null)

    useEffect(() => {
        getAnnouncement()
    }, [])

    const getAnnouncement = async () => {
        try {
            const { list } = await BaseApi._get('9/service_classroom_announcements')
            if (Helper.isNotEmptyList(list)) {
                const c = list[0]
                setCourse(c);
                setHtmlContent(c.html_content)
            }
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const handleOpenForm = () => {
        refForm.current.openForm('classroom_requests')
    }

    return (
        <div className="text-white grid grid-cols-12 gap-0 md:gap-16 px-4 md:px-14 ">
            <CommunityForm ref={refForm} />
            <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-4 mb-16 md:mb-0">
                <div className="text-center">
                    <Link href={`/${locale}/classTraining`} className=" font-neue  text-xl font-semibold md:text-5xl md:font-bold max-w-[960px] m-auto  hover:underline text-center">
                        {/* {isEn() ? 'In-person training registration has started.' : 'Танхимын сургалтын бүртгэл эхэллээ.'} */}
                        {isEn() ? 'Corporate Training' : 'Байгууллагын Багц'}
                    </Link>
                    <div className="flex justify-center mt-8">
                        <button onClick={handleOpenForm} className="bg-red-500 hover:border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-110 rounded-[2rem] text-white text-2xl py-2 px-6 font-bold uppercase transition-all">
                            {isEn() ? 'Get Started Today' : 'Бидэнтэй холбогдох'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 bg-[#1f086090] rounded-[32px] p-8  font-neue shadow-xl shadow-violet-500/50 relative overflow-hidden
">
                <div className="flex items-center justify-center mb-4 pt-2">
                    <Image className="absolute hidden md:block right-[-150px] top-1/2 -translate-y-[50%] select-none" height={300} alt="In-person training" src={twelve} />
                    <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
                        <div className="bg-gray-50 left-0 rounded-xl h-24 inline-flex justify-center items-center">
                            <img className="h-24 rounded-xl object-cover" alt="In-person training" src={GetFileUrl(course?.image?._id)} />
                        </div>
                        <p className="w-3/5 text-center text-lg font-bold text-gray-200 ">
                            {course?.name}
                        </p>
                    </div>
                </div>
                <div className="z-10">
                    {htmlContent && <SafeHtmlContent htmlContent={htmlContent} color="white" />}
                </div>
            </div>
        </div>
    )
}
export default ClassroomTraining;