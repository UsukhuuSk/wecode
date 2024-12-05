import Link from "next/link"
import Image from "next/image"
import { GetFileUrl } from "@/lib/utils"
import { Helper } from "@/lib/helper"
import { BaseApi } from "@/api/baseApi"
import { useEffect, useState } from "react"

export const ProMainInfo = ({ userInfo, trns }: any) => {
    const [learningCnt, setLearninCnt] = useState(0)
    const [passedCnt, setPassedCnt] = useState(0)
    useEffect(() => {
        getCounts()
    }, [])
    const getCounts = async () => {
        try {
            const { learning_count, passed_count } = await BaseApi._get('/exam/count/courses')
            setLearninCnt(learning_count)
            setPassedCnt(passed_count)
        } catch (error) {
            Helper.handleError(error)
        }
    }
    return (
        <div className="max-w-[390px]">
            <div className="border border-[#40404787] bg-[#33415533] min-w-[390px] rounded-xl px-4 pb-4 pt-3 flex flex-col gap-4">
                <div className="flex justify-center rounded-full max-w-[100px] m-auto">
                    <Link href={'/settings/profile'}>
                        {userInfo.image && (
                            <Image
                                src={GetFileUrl(userInfo.image._id)}
                                alt="profile"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        )}
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="text-white font-neue font-semibold text-[20px]">
                        {userInfo.given_name} {userInfo.surname?.split("")[0]}.
                    </div>
                    <div className="flex justify-center gap-2">
                        <div className="text-slate-400 font-normal text-[14px] font-neue lowercase">
                            {learningCnt} {trns('enrolled')}
                        </div>
                        <div className="text-slate-400 font-normal text-[14px] font-neue lowercase">
                            {passedCnt} {trns('completed')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}