'use client'
import React from "react";
import { FaTrophy } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { LeaderBoard } from "@/components/leaderBoard/board";

export default function Leaderboard() {
  const trns = useTranslations("profile")

  return (
    <div className="min-h-screen wrapContainer py-[100px] overflow-hidden">
      <div className="mb-8 text-center flex flex-col gap-2">
        <FaTrophy className="h-5 w-5 text-green-400 m-auto" />
        <div className="mb-4 flex items-center justify-center gap-2">
          <h1 className="text-[36px] font-bold text-white font-neue">
            {trns('leaderboard')}
          </h1>
        </div>
        <div className="min-w-[200px] rounded-full m-auto text-white bg-slate-700 border border-[#40404787]">
          {trns('total')} 
        </div>
      </div>
      <LeaderBoard />
    </div>
  );
}
