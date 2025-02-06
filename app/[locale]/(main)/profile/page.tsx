"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import wave from "../../../../assets/wave.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

import { useAuth } from "../../../../context/AuthContext";
import { useTranslations } from "next-intl";
import { ProCourseLearning } from "@/components/profile/CourseLearning";
import { ProCourseCompleted } from "@/components/profile/CourseCompleted";
import { ProfileCalendar } from "@/components/profile/Calendar";
import { ProMainInfo } from "@/components/profile/MainInfo";
import { ProLeaderBoard } from "@/components/profile/LeaderBoard";
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import dayjs from "dayjs";

export default function Profile({ params }: any) {
  const trns = useTranslations('profile')
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState<any>({});
  const [streakDays, setStreakDays] = useState<any>([])
  const today = dayjs();

  useEffect(() => {
    if (user) {
      setUserInfo({ ...user })
    }
  }, [user])

  useEffect(() => {
    getStreakDays()
  }, [])

  const getStreakDays = async () => {
    try {
      const list = await BaseApi._get('exam/streakdays', { date: today.format('YYYY-MM-DD') })
      if (Helper.isNotEmptyList(list)) {
        for (const item of list) {
          if (Helper.isNotEmptyList(item['streak_dates'])) {
            setStreakDays((prev: any) => [...prev, ...item['streak_dates']]);
          }
        }
      }

    } catch (error) {
      Helper.handleError(error)
    }
  }


  const WelcomeProfile = () => {
    return (
      <div className="flex flex-col items-center py-4">
        <div className="flex items-center gap-[10px] text-white">
          <Image src={wave} alt="wave" width={32} height={32} />
          <span className="font-adineue text-xl md:text-[36px] font-bold">
            {trns('welcome')}, {userInfo.given_name}{" "}
            {userInfo.surname?.split("")[0]}.!
          </span>
        </div>
        <div className="text-center md:text-left font-normal text-[14px] font-neue text-slate-200">
          {trns('dayInfo').replace("DAYCOUNT", streakDays.length)}
        </div>
      </div>
    )
  }
  return !user ? (
    <></>
  ) : (
    <div className="bg-[#13032B] md:bg-transparent  min-h-screen container pt-20 overflow-hidden pb-4">
      <div className="hidden md:block w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-primary blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="block md:hidden">
        {WelcomeProfile()}
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="flex flex-col gap-6 items-center md:items-start ">
          <ProMainInfo userInfo={userInfo} trns={trns} />
          <ProfileCalendar locale={params.locale} streakDays={streakDays} />
          <ProLeaderBoard />
        </div>
        <div className="w-full">
          <div className="hidden md:block">
            {WelcomeProfile()}
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
                        data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-[#fff] data-[state=active]:font-semibold
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
