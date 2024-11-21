"use client";

import { useEffect } from "react";

const BASEURL = process.env.NEXT_PUBLIC_VIDEO_URL
export default function VideoCourse({ id, locale }: any) {
  const width = 700
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
      } catch (e) {}
    };
    window.addEventListener('message', handlePostMessage, false);
    return () => {
      window.removeEventListener('message', handlePostMessage, false);
    };
  }, []);
  return <iframe
    id="iframevideo"
    style={{ width: `${width}px`, height: `${width/16*9}px`}}
    className="overflow-hidden h-full w-full"
    src={ `${BASEURL}/?id=${id}&lang=${locale}` }
  />
}