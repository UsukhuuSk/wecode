"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import laptop from "../../../../assets/laptop.svg";
import { Input } from "../../../../components/ui/input";
import { Search01Icon } from "@hugeicons/react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { getLocale } from "next-intl/server";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { fetchImageFileById } from "../../../../lib/imageUtils";
import { BaseApi } from "../../../../api/baseApi";
import CourseFilter from "../../../../components/course/Filter";
import CourseCard from "../../../../components/course/Card";


export default function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    text: "",
    topics: [],
    levels: []
  })

  useEffect(() => {
    getCourses()
  }, [filter])

  const getCourses = async () => {
    try {
      setLoading(true)
      const searchObj: any = {}

      if (filter.levels.length > 0) {
        searchObj.level_id = filter.levels
      }
      if (filter.topics.length > 0) {
        searchObj.tags = filter.topics
      }
      const { list } = await BaseApi._get('9/service_acourses', { search: JSON.stringify(searchObj) })
      setCourses(list)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = ({ selectedTopics, selectedLevels }: any) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      topics: selectedTopics || prevFilter.topics,
      levels: selectedLevels || prevFilter.levels,
    }));
  }

  return (
    <div className="relative">
      {" "}
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="">
        <div className="border-b border-slate-800">
          <div className="pt-12  px-[120px] flex justify-between items-center">
            <div className="flex flex-col gap-6 text-white">
              <h1 className="font-bold text-[48px] font-adineue leading-none">
                All Courses
              </h1>
              <p className="text-center text-[16px] font-semibold font-neue leading-none">
                Grow your AI career with foundational specializations and
                skill-specific short courses taught by leaders in the field.
              </p>
            </div>
            <Image src={laptop} alt="laptop image" width={200} height={200} />
          </div>
        </div>
        <div className="flex w-full px-[120px] py-12">
          <CourseFilter onChange={handleFilterChange} />
          <div className="w-full">
            <div className="bg-transparent p-6 min-h-screen">
              <Tabs defaultValue="most-popular" className="w-full">
                <TabsList className="flex justify-start  rounded-none space-x-4 mb-6 border-b border-gray-600">
                  <TabsTrigger
                    value="most-popular"
                    className="text-white rounded-none text-[16px] px-4 py-[5px] transition-colors duration-200 ease-in-out
                    data-[state=active]:border-b-2 data-[state=active]:border-[#4317ff] data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                    data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                  >
                    Most popular
                  </TabsTrigger>
                  <TabsTrigger
                    value="top-rated"
                    className="text-white font-neue text-[16px] rounded-none px-4 py-[5px] transition-colors duration-200 ease-in-out
                    data-[state=active]:border-b-2 data-[state=active]:border-[#4317ff] data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                    data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                  >
                    Top rated
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="most-popular">

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                      loading ? <>
                        {
                          [1, 2].map(item => {
                            return (
                              <div key={item} className="h-72 flex flex-col gap-4 rounded-[32px] animate-pulse overflow-hidden">
                                <div className="bg-[#e2e8f04a] h-48">

                                </div>
                                <div className="bg-[#e2e8f04a] h-6 rounded-md">

                                </div>
                                <div className="bg-[#e2e8f04a] h-6 rounded-md">

                                </div>
                              </div>
                            )
                          })
                        }
                      </> :
                        <>
                          {
                            courses.map((item: any, index: number) => (
                              <CourseCard key={index} course={item} />
                            ))
                          }
                        </>
                    }
                  </div>
                </TabsContent>
                <TabsContent value="top-rated">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((item: any, index: number) => (
                      <CourseCard key={index} course={item} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
