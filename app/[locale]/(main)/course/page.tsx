import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import laptop from "../../../../assets/laptop.svg";
import { Input } from "../../../../components/ui/input";
import { Search01Icon } from "hugeicons-react";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { maincourses } from "../../../../data/dummy";

export default function Course() {
  const locale = useLocale();
  const topics = [
    {
      id: 0,
      name: "Artificial Intelligence",
    },
    {
      id: 1,
      name: "Machine Learning",
    },
    {
      id: 2,
      name: "Coding",
    },
  ];
  const level = [
    {
      id: 0,
      name: "Beginner",
    },
    {
      id: 1,
      name: "Intermediate",
    },
    {
      id: 2,
      name: "Advanced",
    },
  ];
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
          <div className="w-[300px] flex flex-col text-white gap-4 pr-8">
            <div className="flex flex-col gap-4">
              <div className="relative flex justify-between items-center bg-slate-700 text-white max-w-[230px] rounded-[100px] border border-[rgba(64,64,71,0.53)]">
                <Search01Icon
                  size={16}
                  color={"#fff"}
                  className="absolute left-3"
                />
                <Input
                  className="search border-none focus:border-none rounded-[100px] pl-10"
                  placeholder="Search"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-[15px] font-neue font-medium">
                  Filters
                </span>
                <span className="text-[15px] font-neue font-bold">
                  Clear all
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[15px] py-[10px] font-medium font-neue">
                  Topics
                </h2>
                {topics.map((item, index) => (
                  <div key={index}>
                    <Checkbox key={item.id} />
                    <label>{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                    {maincourses.map((item, index) => (
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
                            <span className="text-white space-x-1">
                              {item.teachers.map((item, index) => (
                                <span key={index}>{item.given_name}</span>
                              ))}{" "}
                              • {item.duration_seconds} hours
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
                <TabsContent value="top-rated">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {maincourses.slice(0, 1).map((item, index) => (
                      <div
                        key={index}
                        className="bg-transparent rounded-[32px] overflow-hidden max-w-[470px] customborder"
                      >
                        <div className="overflow-hidden object-cover max-w-[475px] max-h-[190px] rounded-t-[24px]">
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
                            <span className="text-white space-x-1">
                              {item.teachers.map((item, index) => (
                                <span className="" key={index}>
                                  {item.given_name}
                                </span>
                              ))}
                              • {item.duration_seconds} hours
                            </span>
                            {/* <Badge className="">
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
    </div>
  );
}
