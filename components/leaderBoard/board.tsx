import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { GetFileUrl } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import crown from "@/assets/crown.svg";

export const LeaderBoard = forwardRef(({ isMini }: any, ref) => {
    const trns = useTranslations("profile")

    const [otherUsers, setOtherUsers] = useState<any[]>([])
    const [topThree, setTopThree] = useState<any[]>([])
    const [filterValue, setFilterValue] = useState<any>(null)

    useImperativeHandle(ref, () => ({
        handleFilter
    }));

    const handleFilter = (val: any) => {
        setFilterValue(val)
    }



    useEffect(() => {
        getList()
    }, [filterValue])

    const getList = async () => {
        try {
            const params: any = {}
            if (filterValue) {
                params.last_date = filterValue
            }
            const data = await BaseApi._get('/exam/leaderboards', params)
            setOtherUsers(data.length > 3 ? data.slice(3) : []);
            if (data.length === 0) {
                setTopThree([{}, {}, {}]);
            } else if (data.length === 1) {
                setTopThree([{}, data[0], {}]);
            } else if (data.length === 2) {
                setTopThree([data[1], data[0], {}]);
            } else if (data.length > 2) {
                setTopThree([data[1], data[0], data[2]]);
            }
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getHours = (d: number) => {
        const remaining: any = d ? d.toFixed() : 0
        const minutes = (remaining / 60)
        const hours = minutes / 60
        return <>{hours >= 1 ? hours.toFixed() : hours.toFixed(2)}</>
    }
    const getColorClass = (index: number) => {
        const colors = [
            'border-[#009BD6]',
            'border-[#FFAA00]',
            'border-[#00D95F]',
        ]
        return colors[index]
    }

    const getBgColorClass = (index: number) => {
        const colors = [
            'bg-[#009BD6]',
            'bg-[#FFAA00]',
            'bg-[#00D95F]',
        ]
        return colors[index]
    }

    const getTextColorClass = (index: number) => {
        const colors = [
            'text-[#009BD6]',
            'text-[#FFAA00]',
            'text-[#00D95F]',
        ]
        return colors[index]
    }

    return (
        <div className={isMini ? "overflow-hidden pty-" : "min-h-screen wrapContainer py-[100px] overflow-hidden"}>
            <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4 font-nu"></div>
            <div className="flex gap-8"></div>
            <div className="mx-auto max-w-2xl">
                <div className={`flex items-end pt-16 font-neue ${isMini ? 'pt-24' : 'pt-16'}`}>
                    {topThree.map((user: any, index) => (
                        <div key={index} className="relative flex-1 flex flex-col items-center"
                        >
                            {user.student_id && index === 1 && (
                                <Image
                                    src={crown}
                                    alt="Crown"
                                    width={64}
                                    height={48}
                                    className="absolute"
                                    style={{
                                        top: isMini ? '-86px' : "-128px",
                                    }}
                                />
                            )}
                            {
                                user.student_id && <div className="absolute " style={{
                                    top: index === 1 ? "-75px" : "-70px",
                                    scale: isMini ? '50%' : undefined
                                }}>
                                    <div
                                        className={` z-10 relative w-full`}
                                    >
                                        <div
                                            className={` z-10 relative w-full overflow-hidden rounded-full border-4 ${getBgColorClass(index)} ${getColorClass(index)}`}
                                            style={{
                                                width: index === 1 ? "155px" : "128px",
                                                height: index === 1 ? "155px" : "128px",
                                            }}
                                        >
                                            <Image
                                                src={user?.image ? GetFileUrl(user.image) : "/placeholder.svg"}
                                                alt={user?.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="absolute rounded-md text-2xl font-semibold z-20 text-white" style={{
                                            bottom: index === 1 ? "-12px" : "-10px",
                                            left: index === 1 ? "72px" : "58px",

                                        }}> {[2, 1, 3][index]}</p>
                                        <div className={`absolute rounded-md   h-8 w-8 rotate-45 z-10 ${getBgColorClass(index)}`}
                                            style={{
                                                bottom: index === 1 ? "-12px" : "-10px",
                                                left: index === 1 ? "62px" : "48px",

                                            }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            }
                            <div
                                className={`w-full flex flex-col items-center justify-end  p-2 text-center ${index === 1
                                    ? " bg-slate-800"
                                    : " bg-slate-900"
                                    }`
                                }
                                style={{
                                    height: isMini ? (index === 1 ? 150 : 82) : (index === 1 ? 195 : 125),
                                    borderTopLeftRadius: [12, 30, 0][index],
                                    borderTopRightRadius: [0, 30, 12][index]
                                }}
                            >
                                {user.student_id && <>
                                    <p title={`${user?.surname?.charAt(0)}.${user?.given_name}`} className="font-medium text-white mt-4 max-w-[70%] text-nowrap truncate" style={{
                                        fontSize: isMini ? (index === 1 ? "16px" : "14px") : (index === 1 ? "24px" : "20px"),
                                        fontWeight: index === 1 ? 600 : 500,
                                    }}>{user?.surname?.charAt(0)}.{user?.given_name}</p>
                                    <p className={`${index === 1 ? 'mb-6' : ''} text-sm ${getTextColorClass(index)}`}>{getHours(user?.total_watching_time)} {trns('hours')}</p>
                                </>
                                }
                            </div>
                        </div>
                    ))}
                </div>
                {
                    Helper.isNotEmptyList(otherUsers) &&
                    <div className={`mt-8 ${isMini ? '' : 'border bg-[#33415533]  border-[#33415533] rounded-xl'} space-y-2  pt-3 px-4 pb-4  `}>
                        {otherUsers.map((user, index: number) => (
                            <div
                                key={index}
                                className={`${isMini ? 'border-b border-wcSlate700' : 'rounded-xl'} flex items-center justify-between bg-transparent hover:bg-[#FFFFFF1A] duration-300 ease-in-out transition-all py-4 px-[10px]`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-6 text-center font-medium text-white">
                                        {index + 4}.
                                    </span>
                                    <span className="font-medium text-white">{user.surname?.charAt(0)}.{user.given_name}</span>
                                </div>
                                <span className="text-sm text-gray-300">{getHours(user.total_watching_time)} {trns('hours')}</span>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
})