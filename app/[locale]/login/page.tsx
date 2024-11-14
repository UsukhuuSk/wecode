"use client";
import React, { useEffect, useRef, useState } from "react";
import { AuroraBackground } from "../../../components/ui/Aurora-Background";
import { motion } from "framer-motion";
import { jsonRequest } from "../../../api/utils";
// import { FloatingNavDemo } from "../../../components/Nav";
export default function page() {
  // const [height, setHeight] = useState(0)
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
  const BASEURL = process.env.NEXT_PUBLIC_AUTH_URL
  const iRef = useRef<HTMLIFrameElement | null>(null);
  const requestId = generateUUID()
  useEffect(() => {
    window.addEventListener('message', handlePostMessage, false)
  })
  const handlePostMessage = (event: any) => {
    try {
      // if (!this.env.authUrl.includes(event.origin) && event.data !== 'string') { return }
      const { type, data } = JSON.parse(event.data)
      if (type === 'setHeight') {
        const iframeLogin = window.document.getElementById('iframeLogin')
        if (iframeLogin && data?.height) {
          iframeLogin.style.height = `${data.height}px`;
      }
      } else if (type === 'login') {
        handleLogin(data.token)
      }
    } catch (_) {}
  }
  const handleLogin = (token: string) => {
    console.log('logged token', token)
    jsonRequest({ endpoint: `/auth/user`, headers: { 'Authorization': `Bearer ${token}` } }).then((result) => {
      console.log('logged user', result)
    }).catch(err => {
      console.log('logged err', err)
    })
  }
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-[140vh]"
      >
        <div className="font-montserratAlt gradtext text-3xl md:text-7xl font-bold text-white text-center">
          <div className="w-[380px] bg-white py-10 rounded-3xl">
            {/* <div className="!text-gray-500 text-2xl text-center">Нэвтрэх</div> */}
            <iframe
              id="iframeLogin"
              ref={iRef}
              style={{ height: `0px` }}
              className="overflow-hidden h-full w-full"
              src={ `${BASEURL}/login?p=9&type=students&requestId=${requestId}&props=google,linkedin` }
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
