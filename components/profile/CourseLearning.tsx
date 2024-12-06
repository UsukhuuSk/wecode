import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { GetFileUrl } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useEffect, useState } from "react"

export const ProCourseLearning = () => {
    const trns = useTranslations('profile')
    const [list, setList] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        try {
            setLoading(true)
            const data = await BaseApi._get('exam/learning/courses')
            await Helper.wait()
            setList(data)
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    const getDuration = (remaining: number) => {
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        return remaining > 0 ? (<>{hours}:{minutes}:{seconds < 10 ? "0" + seconds : seconds}</>) : "-"
    }


    if (loading) {
        const textDiv = (width: any, height: number) => {
            return (
                <div style={{ width, height }} className="h-8 rounded-xl bg-slate-600"></div>
            )
        }
        return (
            <div className="text-white animate-pulse">
                <ul className="flex flex-col gap-4 ">
                    {
                        [1, 2].map((item: any, index) => {
                            return (
                                <li key={'r' + index} className="h-[80px] md:h-[195px] bg-[#13032B40] border border-[#404047] rounded-3xl overflow-hidden flex-col md:flex-row flex items-center justify-between pr-4">
                                    <div className="flex gap-4 items-center">
                                        <div className="rounded-3xl overflow-hidden flex justify-center items-center w-[75px] md:w-[365px] h-[80px] md:h-[195px] bg-slate-600">
                                        </div>
                                        <div className="font-neue px-4 flex md:block items-center gap-2">
                                            <p className="mb-2 font-medium">{textDiv(150, 20)}</p>
                                            <p className="text-[13px] text-wcSlate400 mb-[10px]">{textDiv(40, 20)}</p>
                                            <div className="rounded-[2rem] px-3 py-[5px] bg-slate-600 text-slate-600 inline-block text-xs">
                                                {trns('passed')}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={`/course/${item._id}`}>
                                            <button className="bg-slate-600 text-slate-600 px-4 py-3 font-semibold rounded-[2rem]">
                                                {trns('continueLearning')}
                                            </button>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div className="text-white">
                <ul className="flex flex-col gap-4 ">
                    {
                        list.map((item: any) => {
                            return (
                                <li key={item._id} className="h-[80px] md:h-[195px] bg-[#13032B40] border border-[#404047] rounded-xl md:rounded-3xl overflow-hidden flex items-center justify-between pr-4">
                                    <div className="flex gap-4 items-center">
                                        <div className="rounded-xl md:rounded-3xl overflow-hidden flex justify-center items-center w-[75px] md:w-[365px] h-[80px] md:h-[195px]">
                                            <img className="w-[365px] object-fit" src={GetFileUrl(item.image._id)} />
                                        </div>
                                        <div className="font-neue px-4 flex md:block items-center gap-2">
                                            <p className="mb-2 font-medium text-xs md:text-base">{item.name}</p>
                                            <p className="text-[13px] text-wcSlate400 mb-[10px]">{getDuration(item.duration_seconds)}</p>
                                            <div className="rounded-[2rem] px-3 py-[5px] border inline-block text-xs" style={{ color: item.level_id.color, borderColor: item.level_id.color }}>{item.level_id.name}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={`/course/${item._id}`}>
                                            <button className="hover:bg-primary hover:text-white bg-white text-xs md:text-base text-primary px-2 py-1 md:px-4 md:py-3 font-semibold rounded-[1rem] md:rounded-[2rem]transition-all duration-300">
                                                {trns('continueLearning')}
                                            </button>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}