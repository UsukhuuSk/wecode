"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import moment from "moment";
import { blogList, getFile } from "../../../../api/serviceuser";
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
  const [posts, setPosts] = useState<Post[]>([]);
  const locale = useLocale();
  const t = useTranslations("blog");

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = (await blogList()) as Post[];
      setPosts(posts);
      const postsWithImages = await Promise.all(
        posts.map(async (post) => {
          if (post.image && post.image._id) {
            try {
              const imageFile = await getFile(post.image._id); // Await getFile
              return {
                ...post,
                image: { ...post.image, url: imageFile?.url }, // Set the resolved URL
              };
            } catch (error) {
              console.error("Error fetching image:", error);
              return post;
            }
          }
          return post;
        })
      );
      setPosts(postsWithImages);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <main className="h-full min-h-screen w-full relative  py-24 md:py-24 overflow-hidden mb-8">
        <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
        <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
        <div className=" md:mt-0">
          <div className="flex flex-col items-center gap-8">
            <h1 className=" text-white font-neue font-semibold text-4xl">
              {t("title")}
            </h1>
            <p className="text-[#cdafaf99] text-base font-semibold">
              {t("subheadline")}
            </p>
            <div className="border border-[#FFFFFF33] w-full "></div>
          </div>

          <div className="h-[1px] blogline mt-[48px] md:mt-[95px] mb-[48px] bg-[#FFFFFF33]"></div>
          <div className="container">
            {posts.map((post, index) => (
              <div key={index} >
                {index !== 0 && (
                  <div className="h-[1px] blogline mt-[48px] md:mt-[95px] mb-[24px] md:mb-[48px] my-8 md:my-16 "></div>
                )}
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-24 ">
                  <div className="text-white font-neue text-sm font-medium tracking-[0.151px] leading-normal">
                    {moment(post.date).format("MMMM Do YYYY")}
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-center md:w-[768px]">
                    <h1 className="text-white text-xl font-semibold">
                      {post.title}
                    </h1>
                    <div className="h-[337px] w-full overflow-hidden rounded-3xl">
                      {post.image.url && (
                        <Link
                          href={`/${locale}/blog/${post._id}`}
                        >
                          <img
                            src={post.image.url}
                            alt={post.image.originalname || "Blog Image"}
                            className="w-full h-full object-cover" // Makes the image cover the container while maintaining aspect ratio
                          />
                        </Link>
                      )}
                    </div>
                    <div
                      className=" text-white text-base font-normal tracking-[0.173px] leading-normal text-start "
                      dangerouslySetInnerHTML={{
                        __html:
                          post.html_content.split(" ").slice(0, 15).join(" ") +
                          "...",
                      }}
                    />
                    <Link
                      href={`/${locale}/blog/${post._id}`}
                      className="text-white hover:text-blue-300 font-base font-bold tracking-[0.173px]"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
