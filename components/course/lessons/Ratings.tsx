import { useEffect, useState } from "react"
import { BaseApi } from "../../../api/baseApi"
import { Helper } from "../../../lib/helper"
import { useTranslations } from "next-intl";
import React from "react";
import { WcRating } from "../../ui/Rating";
import { Dialog } from "../../ui/Dialog";
import { GetFileUrl, GetThumbnailUrl } from "../../../lib/utils";



export const CourseRatings = ({ course }: any) => {
    const trns = useTranslations("course.detail");
    const [total, setTotal] = useState<any>(1500)
    const [average, setAverage] = useState<any>(0)
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const openDialog = (): void => setDialogOpen(true);
    const closeDialog = (): void => setDialogOpen(false);

    const [ratings, setRatings] = useState<any>([
        {
            "rate": 5,
            "count": 1000
        },
        {
            "rate": 4,
            "count": 200
        },
        {
            "rate": 3,
            "count": 100
        },
        {
            "rate": 2,
            "count": 150
        },
        {
            "rate": 1,
            "count": 50
        }
    ])
    const [rate, setRate] = useState(4.5)
    const [myRate, setMyRate] = useState(0)
    const [desc, setDesc] = useState("")

    useEffect(() => {
        getRatings()
    }, [])

    const getRatings = async () => {
        try {
            const data = await BaseApi._get(`/course/9/rates`, { course_id: course._id })
            console.log('data rate', data)
            setRatings(data.rates)
            setTotal(data.total)
            setAverage(data.avg_rate)
            setRate(data.avg_rate)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getWidth = (r: any) => {
        try {
            const totalCount = ratings.reduce((total: any, rating: any) => total + rating.count, 0);
            const itemPercentage = Math.round((r.count / totalCount) * 100);
            console.log(r)
            return {
                width: `${itemPercentage}%`
            }
        } catch (error) {

        }
    }

    const handleRate = async () => {
        if (myRate === 0) {
            return Helper.handleWarning(trns('ratingWarning'))
        }
        try {
            const body = {
                "course_id": course._id,
                "rate": myRate,
                "description": desc
            }
            await BaseApi._post(`/course/9/rates`, body)
            Helper.handleSuccess(trns('ratingSuccess'))
            getRatings();
            closeDialog();
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold font-neue">{trns("ratingTitle")}</p>
                    <p className="text-sm font-neue">{trns("ratingDesc")}</p>
                </div>
                <button onClick={openDialog} className="bg-primary text-white hover:scale-105 hover:opacity-90 transition-all rounded-xl px-4 py-2">
                    {trns("rateButton")}
                </button>
                <Dialog isOpen={isDialogOpen} onClose={closeDialog} title={trns("yourReview")}>
                    <div className="flex flex-col gap-6">
                        <div className="h-[150px] flex gap-6">
                            <div className="h-[150px] w-[150px] bg-card rounded-[2rem] overflow-hidden flex items-center justify-center">
                                <img
                                    className="h-full w-full object-cover"
                                    src={GetThumbnailUrl(course.image._id)}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="flex flex-col justify-around py-4">
                                <div>
                                    <p className="text-zinc-500 text-[13px] font-normal">{trns("courseName")}</p>
                                    <p className="text-2xl font-semibold font-neue">{course.name}</p>
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-[13px] font-normal">{trns("yourReview")}</p>
                                    <WcRating size={24} value={myRate} onChange={setMyRate} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-[13px] font-normal mb-2">{trns("reviewDesc")}</p>
                            <input value={desc} onChange={(e: any) => setDesc(e.target.value)} placeholder={trns("reviewPlaceholder")} className=" w-full border  placeholder-zinc-500 slate-200 h-12 rounded-[2rem] px-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button onClick={handleRate} className="bg-primary w-full text-white font-semibold hover:opacity-90 transition-all rounded-[32px] px-4 py-2">
                            {trns("continue")}
                        </button>
                    </div>
                </Dialog>
            </div>
            <div className="h-4"></div>
            <div className="flex gap-8 h-36">
                <div className="w-24 flex flex-col gap-3 items-center">
                    <span className="text-[64px] font-bold leading-[64px]">
                        {average}
                    </span>
                    <WcRating value={rate} onChange={setRate} />
                    <p className="text-[20px] font-neue font-[500]">
                        {total}
                    </p>
                </div>

                <ul className="flex flex-col justify-between w-[345px]">
                    {
                        ratings.map((r: any, index: any) => {
                            return (
                                <li className="flex items-center gap-3" key={index}>
                                    <span className="font-medium">
                                        {r.rate}
                                    </span>
                                    <div className="w-full h-[10px] rounded-[10px] bg-white relative">
                                        <div style={getWidth(r)} className="absolute top-0 left-0 w-full h-[10px] rounded-[10px] bg-[#FBBC05] ">

                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}