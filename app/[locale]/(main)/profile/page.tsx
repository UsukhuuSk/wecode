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
interface LeaderboardUser {
  rank: number;
  name: string;
  hours: number;
  avatar: string;
}

export default function Profile({ params }: any) {
  const locale = params?.locale;
  const token = Cookies.get("authToken");
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const [userInfo, setUserInfo] = useState<any>({});
  const [imgUrl, setImgUrl] = useState<string | null | undefined>(null);
  const topUsers: LeaderboardUser[] = [
    {
      rank: 2,
      name: "Bataa",
      hours: 16,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 1,
      name: "Bayasgalan B.",
      hours: 32,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 3,
      name: "Oyungoo M.",
      hours: 4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const otherUsers: LeaderboardUser[] = [
    {
      rank: 4,
      name: "Usukbayar",
      hours: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 5,
      name: "Usukbayar",
      hours: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const param = { lang: locale };
        const payload = new URLSearchParams(Object.entries(param));

        const response = await fetch(
          `${BASEURL}/one/9/service_user_profile?${payload}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setUserInfo(data);

        if (data.image && data.image._id) {
          const imgUrl = await fetchImageFileById(data.image._id);
          setImgUrl(imgUrl);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    fetchUserInfo();
  }, []);
  const posts: any = [];
  return (
    <div className="min-h-screen wrapContainer pt-[100px] overflow-hidden">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <div className="max-w-[390px]">
            <div className="border border-[#40404787] bg-[#33415533] min-w-[390px] rounded-xl px-4 pb-4 pt-3 flex flex-col gap-4">
              <div className="flex justify-center rounded-full max-w-[100px] m-auto">
                {imgUrl && (
                  <Image
                    src={imgUrl}
                    alt="profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                )}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-white font-neue font-semibold text-[20px]">
                  {userInfo.given_name} {userInfo.surname?.split("")[0]}.
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-400 font-normal text-[14px] font-neue">
                    0 enrolled
                  </div>
                  <div className="text-slate-400 font-normal text-[14px] font-neue">
                    0 completed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[390px]">
            <div className="border border-[#40404787] bg-[#33415533] min-w-[390px] rounded-xl px-4 pb-4 pt-3 flex flex-col gap-4">
              <Select defaultValue="total">
                <SelectTrigger className="w-[180px] bg-[#272142] border-none text-white">
                  <SelectValue placeholder="Total learning time" />
                </SelectTrigger>
                <SelectContent className="bg-[#13032b] text-white border border-[#40404787]">
                  <SelectItem value="total">Total learning time</SelectItem>
                  <SelectItem value="weekly">Weekly learning time</SelectItem>
                  <SelectItem value="monthly">Monthly learning time</SelectItem>
                </SelectContent>
              </Select>

              {/* <div className="flex flex-col items-center gap-2">
                <div className="text-white font-neue font-semibold text-[20px]">
                  {userInfo.given_name} {userInfo.surname?.split("")[0]}.
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-400 font-normal text-[14px] font-neue">
                    0 enrolled
                  </div>
                  <div className="text-slate-400 font-normal text-[14px] font-neue">
                    0 completed
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex mx-auto flex-col items-center gap-8 py-4">
            <div className="flex items-center gap-[10px] text-white">
              <Image src={wave} alt="wave" width={32} height={32} />
              <span className="font-adineue text-[36px] font-bold">
                Welcome back, {userInfo.given_name}{" "}
                {userInfo.surname?.split("")[0]}.!
              </span>
            </div>
            <div className="font-normal text-[14px] font-neue text-slate-200">
              You’ve got 3 days learning streak, keep going!
            </div>
          </div>
          <div className="">
            <Tabs defaultValue="learning" className="w-full">
              <TabsList className="flex justify-start  rounded-none space-x-4 mb-6 border-b border-gray-600">
                <TabsTrigger
                  value="learning"
                  className="text-white rounded-none text-[16px] px-4 py-[5px] transition-colors duration-200 ease-in-out
                    data-[state=active]:border-b-2 data-[state=active]:border-[#4317ff] data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                    data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                >
                  Learning
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="text-white font-neue text-[16px] rounded-none px-4 py-[5px] transition-colors duration-200 ease-in-out
                    data-[state=active]:border-b-2 data-[state=active]:border-[#4317ff] data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                    data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                >
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent value="learning">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {posts.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-transparent rounded-[32px] overflow-hidden customborder"
                    >
                      <div className="overflow-hidden object-cover max-w-[470px] max-h-[190px] rounded-t-[24px]">
                        <Image
                          src={item.image.link}
                          alt="AI for All"
                          width={400}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white flex items-center gap-[10px]">
                            {/* {item.teachers.map((item: any, index: number) => (
                                <span key={index}>{item.given_name}</span>
                              ))}{" "} */}
                            <span key={index}>
                              {" "}
                              {item.teachers[0].given_name}
                            </span>
                            <span>•</span>
                            {(
                              Math.round((item.duration_seconds / 3600) * 2) / 2
                            ).toFixed(1)}{" "}
                            hours
                          </span>
                          {/* <Badge className="bg-green-600 text-white">
                              Introductory
                            </Badge> */}
                          <div
                            // style={{ borderColor: item.level_id.color }}
                            className={`font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px] border-[${item.level_id.color}] text-[${item.level_id.color}]`}
                          >
                            {item.level_id.name}
                          </div>
                        </div>
                        <h3 className="text-white text-lg font-bold">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {posts.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-transparent rounded-[32px] overflow-hidden customborder"
                    >
                      <div className="overflow-hidden object-cover max-w-[470px] max-h-[190px] rounded-t-[24px]">
                        <Image
                          src={item.image.link}
                          alt="AI for All"
                          width={400}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white flex items-center gap-[10px]">
                            {/* {item.teachers.map((item: any, index: number) => (
                                <span key={index}>{item.given_name}</span>
                              ))}{" "} */}
                            <span key={index}>
                              {" "}
                              {item.teachers[0].given_name}
                            </span>
                            <span>•</span>
                            {(
                              Math.round((item.duration_seconds / 3600) * 2) / 2
                            ).toFixed(1)}{" "}
                            hours
                          </span>
                          {/* <Badge className="bg-green-600 text-white">
                              Introductory
                            </Badge> */}
                          <div
                            // style={{ borderColor: item.level_id.color }}
                            className={`font-neue text-[12px] font-semibold border py-1 px-5 rounded-[32px] border-[${item.level_id.color}] text-[${item.level_id.color}]`}
                          >
                            {item.level_id.name}
                          </div>
                        </div>
                        <h3 className="text-white text-lg font-bold">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
