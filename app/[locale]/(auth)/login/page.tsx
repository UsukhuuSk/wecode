"use client";
import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { jsonRequest } from "../../../../api/utils";
import { AuroraBackground } from "../../../../components/ui/Aurora-Background";
import { useAuth } from "../../../../context/AuthContext";
import LoginGlobe from "@/assets/loginGlobe.png"
import LoginHeaderIcon from "@/assets/loginHeaderIcon.svg"
import purple from "@/assets/soon/purplecircle.png";
import seventh from "@/assets/LandingPage/7.svg";
import eight from "@/assets/LandingPage/8.svg";
import nine from "@/assets/LandingPage/9.svg";
import ten from "@/assets/LandingPage/10.svg";
import eleven from "@/assets/LandingPage/11.svg";
import twelve from "@/assets/LandingPage/12.svg";

import Image from "next/image";

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
    <div className="font-montserratAlt gradtext text-3xl md:text-7xl font-bold text-white text-center h-[100vh] w-full flex items-center justify-center">
      <div className="z-[50] flex flex-col gap-8 items-center">
        <div>
          <Image alt="logo" src={LoginHeaderIcon} />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <Image
            src={seventh}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={eight}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={nine}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={ten}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={eleven}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
          <Image
            src={twelve}
            alt=""
            className="h-[24px] w-[24px] 2xl:h-[28px] 2xl:w-[28px]"
          />
        </div>
        <div className="w-[390px] min-h-[480px] bg-white pt-4 pb-6 px-6 rounded-3xl overflow-hidden ">
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
      <Image className="absolute bottom-0" alt={'l'} src={LoginGlobe} height={1000} width={1000} />
    </div>
  );
}
