"use client";

import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
const BASEURL = process.env.NEXT_PUBLIC_VIDEO_URL
export default function VideoCourse({ id, locale, width, course_id, topic_id, lesson_id }: any) {
  const [parentWidth, setParentWidth] = useState(700);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const token = Cookies.get("authToken");
  const iframeWidth = width || 700

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePostMessage = (event: any) => {
      try {
        const eventData = JSON.parse(event.data)
        if (eventData?.type === 'dimensions') {
          const iframevideo = window.document.getElementById('iframevideo')
          if (iframevideo && eventData?.data?.height) {
            iframevideo.style.height = `${eventData?.data.height}px`;
          }
        }
      } catch (e) { }
    };
    window.addEventListener('message', handlePostMessage, false);
    return () => {
      window.removeEventListener('message', handlePostMessage, false);
    };
  }, []);
  return (
    <div ref={parentRef} className="rounded-xl overflow-hidden">
      <iframe
        id="iframevideo"
        // style={{ width: `${iframeWidth}px`, height: `${iframeWidth / 16 * 9}px` }}
        style={{ width: `${parentWidth}px`, height: `${parentWidth / 16 * 9}px` }}
        className="overflow-hidden h-full w-full"
        allowFullScreen
        src={`${BASEURL}/${id}?lang=${locale}&auth_token=${token || ''}&course_id=${course_id || ''}&topic_id=${topic_id || ''}&lesson_id=${lesson_id || ''}`}
      />
    </div>
  )
}