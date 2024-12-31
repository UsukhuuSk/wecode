import { useTranslations } from "next-intl";
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import CourseCard from "../course/Card";
import Link from "next/link";
const HomeCourses = () => {
    const t = useTranslations("HomePage");
    const [courses, setCourses] = useState<any>([])

    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getCourses()
    }, [])


    const getCourses = async () => {
        try {
            setLoading(true)
            const data = await BaseApi._get('9/service_acourses')
            setCourses(data.list)
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-primary blur-[200px] min-w-[500px] max-w-[752px] h-[124px] -z-[10]"></div>
            <div className="text-center flex flex-col gap-8">
                <div className="max-w-[205px] flex justify-center m-auto text-[18px] font-bold font-neue py-2 px-4 text-center text-white border-2 border-primary rounded-[32px]">
                    {t("courses.title")}
                </div>
                <h1 className=" font-neue  text-2xl font-semibold md:text-5xl md:font-bold max-w-[960px] m-auto">
                    {t("courses.subtitle")}
                </h1>
            </div>
            <div className="z-1 px-10">
                <Carousel>
                    <CarouselContent className="space-x-5 pl-6">
                        {courses.map((item: any, index: any) => (
                            <div
                                key={index}
                                className="basis-1/3 pb-6 min-w-[320px] md:min-w-[365px] h-auto foverflow-hidden"
                            >
                                <CourseCard key={index} course={item} />
                            </div>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white text-black" />
                    <CarouselNext className="bg-white text-black" />
                </Carousel>
            </div>
            <Link href={'/login?mode=register'} className="transition-all font-bold text-[1rem] text-center font-neue px-10 py-4 rounded-[32px] bg-primary hover:bg-white hover:text-primary text-white m-auto">
                {t("courses.signup")}
            </Link>
        </>
    )
}
export default HomeCourses