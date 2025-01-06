import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { FaTrophy } from "react-icons/fa"
import { useRef, useState } from "react"
import { BoardFilter } from "../leaderBoard/filter"
import LeaderBoard from "../leaderBoard/board"

export const ProLeaderBoard = ({ isMini }: any) => {
    const trns = useTranslations('profile.boardItems')
    const locale = useLocale()
    const boardRef = useRef<any>();
    const handleFilterChange = (val: any) => {
        boardRef.current.handleFilter(val)
    }
    return (
        <>
            <div className="w-full text-center items-center flex justify-between gap-2">
                <div className="flex items-center justify-start gap-2">
                    <FaTrophy className="h-5 w-5 text-green-400 m-auto" />
                    <h1 className="text-[18px] font-bold text-white font-neue">
                        {trns('leaderboard')}
                    </h1>
                </div>
                <Link
                    href={`/${locale}/leaderboard`}
                    className="text-[13px] font-normal font-neue text-[#FFFFFF80]"
                >
                    {trns('fullBoard')}
                </Link>
            </div>
            <div className="border border-[#40404787] bg-[#33415533] min-w-[390px] rounded-xl px-4 pb-4 pt-3 flex flex-col gap-4">
                <BoardFilter onChange={handleFilterChange} />
                <LeaderBoard ref={boardRef} isMini />
            </div>
        </>
    )
}