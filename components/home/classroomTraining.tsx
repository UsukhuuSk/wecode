
import Link from "next/link";
import twelve from "@/assets/LandingPage/12.svg";
import Image
    from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";
import CommunityForm from "../community/form";
const ClassroomTraining = () => {
    const { locale } = useParams()
    const refForm = useRef<any>(null);
    const isEn = () => locale === 'en'

    const handleOpenForm = () => {
        refForm.current.openForm('classroom_requests')
    }

    return (
        <div className="text-white grid grid-cols-12 gap-0 md:gap-16 px-4 md:px-14 ">
            <CommunityForm ref={refForm}/>
            <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-4 mb-16 md:mb-0">
                <div className="text-center">
                    <Link href={'/classTraining'} className=" font-neue  text-xl font-semibold md:text-5xl md:font-bold max-w-[960px] m-auto  hover:underline text-center">
                        Танхимын сургалтын бүртгэл эхэллээ.
                    </Link>
                    <div className="flex justify-center mt-8">
                        <button onClick={handleOpenForm} className="bg-red-500 hover:border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-110 rounded-[2rem] text-white text-2xl py-2 px-6 font-bold uppercase transition-all">Бүртгүүлэх</button>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 bg-[#1f086090] rounded-[32px] p-6  font-neue shadow-xl shadow-indigo-500/50 relative overflow-hidden
">
                <div className="flex items-center justify-center">
                    <Image className="absolute hidden md:block right-[-150px] top-1/2 -translate-y-[50%] select-none" height={300} alt="In-person training" src={twelve} />
                    <p className="w-3/5 text-center text-lg font-bold text-gray-200 ">
                        {
                            isEn() ? `Enrollment is now open for the evening classes of  the Machine Learning Engineering program for adults.` : `  Машин сургалтын инженерчлэлийн хөтөлбөрийн   Насанд хүрэгчдэд зориулсан оройн ангийн элсэлт эхэллээ.`
                        }

                    </p>
                </div>
                <p className="text-gray-300">
                    <span className="font-semibold">  {isEn() ? 'Duration:' : 'Үргэлжлэх хугацаа:'} </span>
                    {isEn() ? '6 months' : '6 сар'}
                </p>
                <p className="text-gray-300">
                    <span className="font-semibold">
                        {isEn() ? 'Class schedule:' : ' Хичээлийн хуваарь:'}
                    </span>
                    <span>
                        {isEn() ? 'Tuesday, Thursday and Saturday, from 6:30 to  8:00 PM' : ' Мягмар, Пүрэв, Бямба гаргуудад 18:30-20:00 цагт'}
                    </span>
                </p>
                <p className="text-gray-300">
                    {isEn() ? 'What will you learn in this program?' : ' Энэхүү хөтөлбөрөөр та юу суралцах вэ?'}
                </p>
                <ul className="list-disc pl-8 text-gray-300">
                    <li>
                        {isEn() ? `Deepening Python Skills and Introducing Data Manipulation
`: ` Python ур чадварыг гүнзгийрүүлж, өгөгдөл боловсруулах аргуудыг сурах`}
                    </li>
                    <li>
                        {isEn() ? `Introduction to Data Visualization and Basic AI Concepts
`: `Өгөгдөл дүрслэх үндэс болон хиймэл оюуны үндсэн ойлголтуудтай танилцах`}
                    </li>
                    <li> {isEn() ? `Web Fundamentals & Python Integration
`: `Веб хөгжүүлэлтийн үндэс болон Python-ийг интеграцчилах`}
                    </li>
                    <li>{isEn() ? `Building ML Models, Working with Real-World Data, and Web + AI Integration
` : `Машин сургалтын загварууд бүтээж, бодит өгөгдөл дээр ажиллах, веб ба AI интеграцчилах`}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ClassroomTraining;