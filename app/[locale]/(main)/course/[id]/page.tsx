"use client";
import React, { useState } from "react";
import { courses } from "../../../../../data/dummy";
import { IoIosStar } from "react-icons/io";
import Video from "next-video";
import VideoPlayer from "../../../../../components/Video";
export default function CourseDetail({ params }: { params: { id: number } }) {
  const [activeVideoId, setActiveVideoId] = useState<any>();
  const course = courses.find(
    (course) => String(course.id) === String(params.id)
  );
  if (!course) {
    return <p>Course not found</p>;
  }
  const videoJsOptions = {
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };
  return (
    <div className="px-12 py-14">
      <div className="px-6 pb-6 flex flex-col gap-6">
        <span className="flex flex-col gap-1">
          <h1 className="text-[#191919]">{course?.name}</h1>
          {/* <div className="">aaaaaaa</div> */}
          {/* {course &&
            course.episodes &&
            course.episodes.map((episode) => (
              <div key={episode.id} className="my-2 p-4 border rounded-md">
                <h3 className="font-bold">{episode.title}</h3>
                <button
                  onClick={() => setActiveVideoId(episode.id)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {activeVideoId === episode.id ? "Playing" : "Play"}
                </button>
                {activeVideoId === episode.id && (
                  //   <Video src={episode.videoUrl} />
                  )}
                  </div>
                  ))} */}
          {/* <Video src="https://www.youtube.com/watch?v=bHXn-SU7YYg&ab_channel=TheKidLAROIVEVO" /> */}
          {/* <VideoPlayer options={videoJsOptions} /> */}
        </span>
      </div>
    </div>
  );
}
