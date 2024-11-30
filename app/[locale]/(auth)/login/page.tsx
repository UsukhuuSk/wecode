"use client";
import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { jsonRequest } from "../../../../api/utils";
import { AuroraBackground } from "../../../../components/ui/Aurora-Background";
import { useAuth } from "../../../../context/AuthContext";
export default function page({ params }: any) {
  const { login }: any = useAuth()
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const router = useRouter();
  const BASEURL = process.env.NEXT_PUBLIC_AUTH_URL;
  const requestId = generateUUID();
  useEffect(() => {
    const handleLogin = (token: string) => {
      try {
        Cookies.set("authToken", token, { expires: 1, secure: true });
        login()
        jsonRequest({
          endpoint: `/auth/user`,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((result: any) => {
            router.push(`/${params?.locale}/profile`);
          })
          .catch((err) => {
            console.log("logged err", err);
          });
      } catch (err) {
        console.error("Error setting token:", err);
      }
    };
    const handlePostMessage = (event: any) => {
      try {
        const eventData = JSON.parse(event.data);
        if (eventData?.type === "setHeight") {
          const iframeLogin = window.document.getElementById("iframeLogin");
          if (iframeLogin && eventData?.data?.height) {
            iframeLogin.style.height = `${eventData?.data.height}px`;
          }
        } else if (eventData?.type === "login") {
          handleLogin(eventData?.data?.token);
        }
      } catch (e) { }
    };
    window.addEventListener("message", handlePostMessage, false);
    return () => {
      window.removeEventListener("message", handlePostMessage, false);
    };
  }, []);
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
          <div className="w-[380px] bg-white pt-4 pb-6 px-6 rounded-3xl">
            {/* <div className="!text-gray-500 text-2xl text-center">Нэвтрэх</div> */}
            <iframe
              id="iframeLogin"
              style={{ height: `0px` }}
              className="overflow-hidden h-full w-full"
              src={`${BASEURL}/login?p=9&type=students&requestId=${requestId}&props=google,linkedin&lang=${params?.locale || "mn"
                }`}
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
