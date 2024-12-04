'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { Helper } from "../../../../lib/helper";
import { BaseApi } from "../../../../api/baseApi";
import { useTranslations } from "next-intl";
import { GetFileUrl } from "../../../../lib/utils";
interface LeaderboardEntry {
  position: number;
  name: string;
  hours: number;
  image?: string;
}
export default function Leaderboard() {
  // const [topUsers, setTopUsers] = useState<any[]>([])
  const trns = useTranslations("leaderboard")
  const [otherUsers, setOtherUsers] = useState<any[]>([])

  useEffect(() => {
    getList()
  }, [])
  const getList = async () => {
    try {
      const data = await BaseApi._get('/exam/leaderboards')
      setOtherUsers(data)
    } catch (error) {
      Helper.handleError(error)
    }
  }

  const topUsers: LeaderboardEntry[] = [
    {
      position: 2,
      name: "Bataa",
      hours: 28,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      position: 1,
      name: "Bayasgalan B.",
      hours: 32,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      position: 3,
      name: "Oyungoo M.",
      hours: 24,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const getHours = (d: number) => {
    const remaining: any = d ? d.toFixed() : 0
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;
    return <>{hours}:{minutes}:{seconds < 10 ? "0" + seconds : seconds}</>
  }

  return (
    <div className="min-h-screen wrapContainer py-[100px] overflow-hidden">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex gap-8"></div>
      <div className="mx-auto max-w-2xl">
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

        <div className="relative mb-8 flex h-[280px] items-end justify-center">
          {otherUsers
            .sort((a, b) => a.position - b.position)
            .map((user: any, index) => (
              <div
                key={user.position}
                className={`absolute flex flex-col items-center ${index === 1
                  ? "bottom-0 z-10 mb-8"
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
                      src="/placeholder.svg?height=40&width=40"
                      alt="Crown"
                      width={40}
                      height={40}
                      className="absolute -top-5 left-1/2 -translate-x-1/2"
                    />
                  )}
                  <div
                    className={`relative overflow-hidden rounded-full border-2 ${index === 1 ? "border-yellow-400" : "border-green-400"
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
        <div className="space-y-2 border pt-3 px-4 pb-4 bg-[#33415533] rounded-xl border-[#33415533]">
          {otherUsers.map((user, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-transparent hover:bg-[#FFFFFF1A] duration-300 ease-in-out transition-all py-4 px-[10px]"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center font-medium text-white">
                  {index+1}.
                </span>
                <span className="font-medium text-white">{user.surname?.charAt(0)}.{user.given_name}</span>
              </div>
              <span className="text-sm text-gray-300">{getHours(user.total_watching_time)} {trns('hours')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
