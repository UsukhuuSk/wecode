import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import dayjs from "dayjs"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import 'dayjs/locale/mn'
import { useParams } from "next/navigation"

export const ProCourseCompleted = () => {
    const params: any = useParams()
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
    if (loading) {
        const textDiv = (width: any, height: number) => {
            return (
                <div style={{ width, height }} className="h-8 rounded-xl bg-slate-600"></div>
            )
        }
        return (
            <div className="text-white animate-pulse">
                <ul className="flex flex-col gap-4 text-sm font-semibold font-neue">
                    <li className="grid grid-cols-12 pb-3 border-b border-[#404047]  overflow-hidden px-4">
                        {
                            [4, 4, 2, 2].map((t, index: number) => {
                                return (
                                    <div key={'row' + index} className={`col-span-${t}`}>
                                        {textDiv(80 + (1 * 5), 16)}
                                    </div>
                                )
                            })
                        }

                    </li>
                    {
                        [1, 2, 3].map((item: any, index: number) => {
                            return (
                                <li key={item} className="grid grid-cols-12  px-4 bg-[#33415540] border border-[#404047] rounded-xl overflow-hidden py-4">
                                    {
                                        [4, 4, 2, 2].map((t, index: number) => {
                                            return (
                                                <div key={index} className={`col-span-${t}`}>
                                                    {textDiv(100 + (t * 10), 32)}
                                                </div>
                                            )
                                        })
                                    }
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
                <ul className="flex flex-col gap-4 text-sm font-semibold font-neue">
                    <li className="grid grid-cols-12 pb-3 border-b border-[#404047]  overflow-hidden px-4">
                        <div className="col-span-4">{trns('courseName')}</div>
                        <div className="col-span-4">{trns('dateCompleted')}</div>
                        <div className="col-span-2 text-center">{trns('exam')}</div>
                        <div className="col-span-2 text-right">{trns('certificate')}</div>
                    </li>

                    {
                        list.map((item: any, index: number) => {
                            return (
                                <li key={item._id} className="grid grid-cols-12  px-4 bg-[#33415540] border border-[#404047] rounded-xl overflow-hidden py-4">
                                    <div className="col-span-4">{item.name}</div>
                                    <div className="col-span-4">{dayjs(item.start_date).locale(params.locale).format('MMMM DD, YYYY')}</div>
                                    <div className="col-span-2 text-center">{
                                        index === 1 ? <button className="rounded-[32px] px-3 py-1 text-[#22C55E] bg-[#F0FDF4]">{trns('passed')}</button>
                                            :
                                            <button className="rounded-[32px] px-3 py-1 bg-wcSlate700">{trns('noExam')}</button>
                                    }</div>
                                    <div className="col-span-2 text-right">
                                        <button className="rounded-[32px] px-3 py-1 bg-[#FFFFFF10]">{trns('download')}</button>
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