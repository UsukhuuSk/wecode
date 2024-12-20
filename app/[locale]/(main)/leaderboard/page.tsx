'use client'
import React, { useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { LeaderBoard } from "@/components/leaderBoard/board";
import { BoardFilter } from "@/components/leaderBoard/filter";
import { useRouter } from "next/navigation";

export default function Leaderboard() {
  const trns = useTranslations("profile")
  const ref = useRef<any>()
  const router = useRouter()

  const handleFilterChange = (val: any) => {
    ref.current.handleFilter(val)
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen wrapContainer py-[100px] overflow-hidden font-neue">
      <div>
        <button onClick={handleBack} className="text-white bg-[#FFFFFF20] hover:bg-[#FFFFFF50] px-6 py-3 rounded-[32px] text-sm font-semibold">{trns('goBack')}</button>
      </div>
      <div className="mb-8 text-center flex flex-col gap-2">
        <FaTrophy className="h-5 w-5 text-green-400 m-auto" />
        <div className="mb-4 flex items-center justify-center gap-2">
          <h1 className="text-[36px] font-bold text-white font-neue">
            {trns('leaderboard')}
          </h1>
        </div>
        <div className="min-w-[200px] rounded-full m-auto text-white bg-slate-700 border border-[#40404787] overflow-hidden">
          <BoardFilter main onChange={handleFilterChange} />
        </div>
      </div>
      <LeaderBoard ref={ref} />
    </div>
  );
}
