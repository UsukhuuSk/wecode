"use client";
import React from "react";
import {  useTranslations } from "next-intl";
import BlogListItem from "@/components/blog/ItemList";
import { useBlog } from "@/context/BlogContext";
interface Post {
  _id: string;
  date: string;
  title: string;
  image: any;
  excerpt: string;
  slug: string;
  html_content: string;
  publish_at: string;
}

export default function page() {
  const { postList } = useBlog()
  const t = useTranslations("blog");

  return (
    <>
      <main className="h-full min-h-screen w-full relative  py-24 md:py-32 overflow-hidden mb-8">
        <div className=" md:mt-0">
          <div className="flex flex-col items-center gap-8">
            <h1 className=" text-white font-neue font-semibold text-4xl">
              {t("title")}
            </h1>
            {/* <p className="text-[#cdafaf99] text-base font-semibold">
              {t("subheadline")}
            </p> */}
            <div className="border border-[#FFFFFF33] w-full "></div>
          </div>
          <div className="h-[1px] blogline mt-[48px] md:mt-[95px] mb-[48px] bg-[#FFFFFF33]"></div>
          <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-24 md:gap-10 ">
            {postList.map((post: any, index: any) => (
              <BlogListItem post={post} key={index} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
