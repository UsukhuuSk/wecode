"use client";
import React, { useState } from "react";
import { courses } from "../../../../../data/dummy";
import { IoIosStar } from "react-icons/io";
import Video from "next-video";
import VideoPlayer from "../../../../../components/Video";
export default function CourseDetail({ params }: { params: { id: number } }) {

  return (
    <div className="px-12 py-14">
      <div className="px-6 pb-6 flex flex-col gap-6">
        <span className="flex flex-col gap-1">
          {params.id}
        </span>
      </div>
    </div>
  );
}
