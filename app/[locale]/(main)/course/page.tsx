"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import laptop from "../../../../assets/laptop.svg";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { BaseApi } from "../../../../api/baseApi";
import CourseFilter from "../../../../components/course/Filter";
import CourseCard from "../../../../components/course/Card";
import { useTranslations } from "next-intl";
import { useSearchParams } from 'next/navigation'
import { ReactLenis } from "@/lib/lenis";


export default function Course() {
  const trns = useTranslations("course.detail");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState<any>("most-popular")
  const [tabs, setTabs] = useState<any>([{ value: 'most-popular', label: trns('popular') }, { value: 'top-rated', label: trns('topRated') }])
  const searchParams = useSearchParams()

  const [filter, setFilter] = useState<any>({
    text: "",
    topics: [],
    levels: []
  })
  useEffect(() => {
    const cat = searchParams.get("s");
    if (cat) {
      setFilter((prev: any) => ({
        ...prev,
        topics: [...prev.topics, cat],
      }));
    }
  }, [searchParams])

  useEffect(() => {
    getCourses()
  }, [filter, tabValue])


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
      if (filter.text.length > 0) {
        searchObj.name = { "val": filter.text, "t": "string" }
      }
      const apiUrl = tabValue === 'top-rated' ? 'list/9/service_course_top_rates' : '9/service_courses';
      const data = await BaseApi._get(apiUrl, { search: JSON.stringify(searchObj) })
      setCourses(tabValue === 'top-rated' ? data : data.list)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (field: string, value: any, checked?: boolean) => {
    setFilter((prevFilter: any) => {
      const updatedFilter = { ...prevFilter };
      if (field === "topics" || field === "levels") {
        updatedFilter[field] = checked
          ? [...updatedFilter[field], value]
          : updatedFilter[field].filter((item: any) => item !== value);
      } else {
        updatedFilter.text = value;
      }

      return updatedFilter;
    });
  };


  const handleClear = () => {
    setFilter({
      text: "",
      topics: [],
      levels: []
    })
  }
  return (
    <ReactLenis root>
      <div className="container relative pt-20">
        <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
        <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
        <div className="">
          <div className="border-b border-slate-800">
            <div className="pt-24 md:pt-12 flex justify-between items-center">
              <div className="flex flex-col gap-6 text-white">
                <h1 className="font-bold text-2xl md:text-[48px] font-adineue leading-none">
                  {trns("allCourses")}
                </h1>
                {/* <p className="text-center text-xs md:text-base md:font-semibold font-neue leading-none">
                {trns("allCourseDetail")}
              </p> */}
              </div>
              {/* <Image className="h-[100px] md:h-[200px]" src={laptop} alt="laptop image" /> */}
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row w-full py-12">
            <CourseFilter onChange={handleFilterChange} filter={filter} onClear={handleClear} />
            <div className="w-full">
              <div className="bg-transparent min-h-screen">
                <Tabs value={tabValue} onValueChange={setTabValue} defaultValue="most-popular" className="w-full">
                  <TabsList className="flex justify-start  rounded-none space-x-4 mb-6 border-b border-gray-600">
                    {
                      tabs.map((t: any, index: any) => {
                        return (
                          <TabsTrigger
                            key={index}
                            value={t.value}
                            className="flex-1 md:flex-none text-white rounded-none text-[16px] px-4 py-[5px] transition-colors duration-200 ease-in-out
                        data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-[#fff] data-[state=active]:font-semibold
                        data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent data-[state=inactive]:text-[#ffffff80] data-[state=inactive]:font-medium"
                          >
                            {t.label}
                          </TabsTrigger>
                        )
                      })
                    }
                  </TabsList>
                </Tabs>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {
                    loading ? <>
                      {
                        [1, 2, 3].map(item => {
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
                    </>
                      :
                      <> {courses.map((item: any, index: number) => (
                        <CourseCard key={index} course={item} />
                      ))}
                      </>
                  }
                  {
                    !loading && courses.length === 0 && <p className="text-white">{trns('noResult')}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
