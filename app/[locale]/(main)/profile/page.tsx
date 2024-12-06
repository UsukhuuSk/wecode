"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { fetchImageFileById } from "../../../../lib/imageUtils";
import wave from "../../../../assets/wave.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useAuth } from "../../../../context/AuthContext";
import { FaTrophy } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GetFileUrl } from "@/lib/utils";
import { ProCourseLearning } from "@/components/profile/CourseLearning";
import { ProCourseCompleted } from "@/components/profile/CourseCompleted";
import { ProfileCalendar } from "@/components/profile/Calendar";
import { ProMainInfo } from "@/components/profile/MainInfo";
interface LeaderboardEntry {
  position: number;
  name: string;
  hours: number;
  image?: string;
}

export default function Profile({ params }: any) {
  const trns = useTranslations('profile')
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState<any>({});
  const [imgUrl, setImgUrl] = useState<string | null | undefined>(null);
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
  const otherUsers: LeaderboardEntry[] = Array.from({ length: 2 }, (_, i) => ({
    position: i + 4,
    name: "NAME",
    hours: 2,
  }));

  useEffect(() => {
    if (user) {
      setUserInfo({ ...user })
    }
  }, [user])
  const posts: any = [];
  return !user ? (
    <></>
  ) : (
    <div className="min-h-screen container pt-28 overflow-hidden">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <ProMainInfo userInfo={userInfo} trns={trns}/>
          <ProfileCalendar locale={params.locale} />

          <div className="max-w-[390px]">
            <div className="mb-2 text-center items-center flex justify-between gap-2">
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
              <div className="relative  flex h-[280px] items-end justify-center">
                {topUsers
                  .sort((a, b) => a.position - b.position)
                  .map((user, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center ${index === 1
                        ? "bottom-0 z-10 mb-8"
                        : index === 0
                          ? "bottom-8 left-0"
                          : "bottom-8 right-0"
                        }`}
                      style={{
                        width: index === 1 ? "35.5%" : "30%",
                      }}
                    >
                      <div className="absolute -top-[50%] mb-2">
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
                          className={`relative overflow-hidden rounded-full border-2 ${index === 1
                            ? "border-yellow-400"
                            : "border-green-400"
                            }`}
                          style={{
                            width: index === 1 ? "100px" : "80px",
                            height: index === 1 ? "100px" : "80px",
                          }}
                        >
                          <Image
                            src={user.image || "/placeholder.svg"}
                            alt={user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className={`w-full rounded-t-[30px] pt-10 px-2 flex flex-col items-center justify-center ${index === 1
                          ? "h-[140px] bg-slate-800"
                          : "bg-slate-900 h-[100px]"
                          }`}
                      >
                        <p className="font-medium text-[12px] font-neue text-white">
                          {user.name}
                        </p>
                        <p className="text-sm text-yellow-400">
                          {user.hours} hours
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="">
                {otherUsers.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index === 0 ? "border-b" : ""
                      } justify-between bg-transparent hover:bg-[#FFFFFF1A] duration-300 ease-in-out transition-all py-4 px-[10px]`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center font-medium text-white">
                        {user.position}
                      </span>
                      <span className="font-medium text-white text-[12px]">
                        {user.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300">
                      {user.hours} hours
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center py-4">
            <div className="flex items-center gap-[10px] text-white">
              <Image src={wave} alt="wave" width={32} height={32} />
              <span className="font-adineue text-[36px] font-bold">
                {trns('welcome')}, {userInfo.given_name}{" "}
                {userInfo.surname?.split("")[0]}.!
              </span>
            </div>
            <div className="font-normal text-[14px] font-neue text-slate-200">
              {trns('dayInfo').replace("DAYCOUNT", "5")}
            </div>
          </div>
          <div className="">
            <Tabs defaultValue="learning" className="w-full">
              <TabsList className="flex justify-start  rounded-none space-x-4 mb-6 border-b border-gray-600">
                {
                  ['learning', 'completed'].map((t: any, i: number) => {
                    return (
                      <TabsTrigger
                        key={i}
                        value={t}
                        className="text-white rounded-none text-[16px] px-4 py-[5px] transition-colors duration-200 ease-in-out
                        data-[state=active]:border-b-2 data-[state=active]:border-[#4317ff] data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                        data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                      >
                        {trns(t)}
                      </TabsTrigger>
                    )
                  })
                }
              </TabsList>
              <TabsContent value="learning">
                <ProCourseLearning />
              </TabsContent>
              <TabsContent value="completed">
                <ProCourseCompleted />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
