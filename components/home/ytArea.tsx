import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import YtCard from "./ytCard";

const HomeYtArea = () => {

    const [ytList, setYtList] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    
    useEffect(() => {
        getYtList()
    }, [])

    const getYtList = async () => {
        try {
            setLoading(true)
            const data = await BaseApi._get('youtube/all')
            setYtList((prev: any) => [...data, ...data])

        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container flex flex-col gap-2 bg-[#1f086090] rounded-[32px] p-6  font-neue rainbow">
            <p className="text-2xl font-neue">Хиймэл оюун ухааны тухай ярилцая. </p>
            <p className="flex items-center gap-2 mb-4 text-md">
                <FaYoutube className="text-red-500" /> <Link href={"https://www.youtube.com/@AI_Academy_asia"} rel="noopener noreferrer" target="_blank">AI Academy    </Link>
            </p>
            <div className=" ">
                {
                    !loading && ytList.length > 0 &&
                    <Carousel>
                        <CarouselContent className="space-x-5 pl-6">
                            {ytList.map((yt: any, index: number) => (
                                <YtCard key={index} yt={yt} />
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white text-black" />
                        <CarouselNext className="bg-white text-black" />
                    </Carousel>
                }
                {
                    loading && <div className="animate-pulse flex felx-col gap-4">
                        {[1, 2, 3].map(item => <div key={item} className="w-80 min-h-60 rounded-md bg-slate-600"> </div>)}
                    </div>
                }
            </div>
        </div>
    )
}

export default HomeYtArea;