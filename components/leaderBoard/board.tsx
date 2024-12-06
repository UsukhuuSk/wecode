import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { GetFileUrl } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import crown from "@/assets/crown.svg";

export const LeaderBoard = ({ isMini }: any) => {
    const trns = useTranslations("profile")
    const [otherUsers, setOtherUsers] = useState<any[]>([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        try {
            const data = await BaseApi._get('/exam/leaderboards')
            if (isMini) {
                setOtherUsers(data.length > 3 ? data.slice(0, 3) : data);
            } else {
                setOtherUsers(data)
            }
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getHours = (d: number) => {
        const remaining: any = d ? d.toFixed() : 0
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        return <>{hours}:{minutes}</>
    }

    return (
        <div className={isMini ? "overflow-hidden pty-" : "min-h-screen wrapContainer py-[100px] overflow-hidden"}>
            <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
            <div className="flex gap-8"></div>
            <div className="mx-auto max-w-2xl">
                <div className="relative mb-8 flex h-[280px] items-end justify-center">
                    {otherUsers
                        .sort((a, b) => a.position - b.position)
                        .map((user: any, index) => (
                            <div
                                key={user.position}
                                className={`absolute flex flex-col items-center ${index === 1
                                    ? "bottom-0 z-1 mb-8"
                                    : index === 0
                                        ? "bottom-8 left-4"
                                        : "bottom-8 right-4"
                                    }`}
                                style={{
                                    width: index === 1 ? "35.5%" : "30%",
                                }}
                            >
                                <div className="relative mb-2">
                                    {index === 1 && (
                                        <Image
                                            src={crown}
                                            alt="Crown"
                                            width={40}
                                            height={40}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2"
                                        />
                                    )}
                                    <div
                                        className={`relative overflow-hidden rounded-full border-4 ${index === 1 ? "border-yellow-400" : "border-green-400"
                                            }`}
                                        style={{
                                            width: index === 1 ? "100px" : "80px",
                                            height: index === 1 ? "100px" : "80px",
                                        }}
                                    >
                                        <Image
                                            src={user.image ? GetFileUrl(user.image) : "/placeholder.svg"}
                                            alt={user.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`w-full rounded-t-xl  p-2 text-center ${index === 1
                                        ? "h-[140px] bg-slate-800"
                                        : " bg-slate-900 h-[100px]"
                                        }`}
                                >
                                    <p className="font-medium text-white">{user.surname?.charAt(0)}.{user.given_name}</p>
                                    <p className="text-sm text-yellow-400">{getHours(user.total_watching_time)} {trns('hours')}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={`${isMini ? '' : 'border bg-[#33415533]  border-[#33415533] rounded-xl'} space-y-2  pt-3 px-4 pb-4  `}>
                    {otherUsers.map((user, index: number) => (
                        <div
                            key={index}
                            className={`${isMini ? 'border-b border-wcSlate700' : 'rounded-xl'} flex items-center justify-between bg-transparent hover:bg-[#FFFFFF1A] duration-300 ease-in-out transition-all py-4 px-[10px]`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-6 text-center font-medium text-white">
                                    {index + 1}.
                                </span>
                                <span className="font-medium text-white">{user.surname?.charAt(0)}.{user.given_name}</span>
                            </div>
                            <span className="text-sm text-gray-300">{getHours(user.total_watching_time)} {trns('hours')}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}