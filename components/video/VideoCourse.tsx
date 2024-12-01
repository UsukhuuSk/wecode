"use client";

import { useEffect, useRef, useState } from "react";

const BASEURL = process.env.NEXT_PUBLIC_VIDEO_URL
export default function VideoCourse({ id, locale, width }: any) {
  const [parentWidth, setParentWidth] = useState(700);
  const parentRef = useRef<HTMLDivElement | null>(null);
  
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
        src={`${BASEURL}/?id=${id}&lang=${locale}`}
      />
    </div>
  )
}