import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { FaTrophy } from "react-icons/fa"
import { LeaderBoard } from "../leaderBoard/board"

export const ProLeaderBoard = ({ isMini }: any) => {
    const trns = useTranslations('profile')

    return (
        <>
            <div className="w-full text-center items-center flex justify-between gap-2">
                <div className="flex items-center justify-start gap-2">
                    <FaTrophy className="h-5 w-5 text-green-400 m-auto" />
                    <h1 className="text-[18px]t font-bold text-white font-neue">
                        {trns('leaderboard')}
                    </h1>
                </div>
                <Link
                    href={`/leaderboard`}
                    className="text-[13px] font-normal font-neue text-[#FFFFFF80]"
                >
                    {trns('fullBoard')}
                </Link>
            </div>
            <div className="border border-[#40404787] bg-[#33415533] min-w-[390px] rounded-xl px-4 pb-4 pt-3 flex flex-col gap-4">
                <Select defaultValue="total">
                    <SelectTrigger className="w-[180px] bg-[#272142] border-none text-white">
                        <SelectValue placeholder={trns('totalTime')} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#13032b] text-white border border-[#40404787]">
                        <SelectItem value="total">{trns('totalTime')}</SelectItem>
                        <SelectItem value="weekly">{trns('weeklyTime')}</SelectItem>
                        <SelectItem value="monthly">{trns('monthlyTime')}</SelectItem>
                    </SelectContent>
                </Select>
                <LeaderBoard isMini/>
            </div>
        </>
    )
}