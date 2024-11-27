import React from "react";
import Image from "next/image";
import settings from "../../../../../assets/settings.png";
import Link from "next/link";
import { Invoice01Icon } from "@hugeicons/react";
import EditProfile from "../components/EditProfile";
import NotificationSettings from "../components/NotificationSettings";
import PurchaseHistory from "../components/PurchaseHistory";
export default function Settings() {
  return (
    <div className="min-h-screen wrapContainer py-[100px] overflow-hidden">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex items-start gap-[10px] pt-4 pb-8 border-b border-slate-700">
        <Image src={settings} alt="" />
        <h1 className="text-white text-[36px] font-bold font-adineue">
          Settings
        </h1>
      </div>
      <div className="max-w-[1024px] mt-10 flex gap-8 overflow-hidden">
        <div className="max-w-[210px] min-w-[210px]">
          <div className="flex flex-col gap-2">
            <Link
              href={"/profile/settings"}
              className={`flex items-center px-4 py-4 gap-2 rounded-xl bg-[#4317FF]`}
            >
              <span className="">
                <Invoice01Icon size={18} color={"#fff"} variant={"bulk"} />
              </span>
              <span className="text-white font-normal text-sm font-neue">
                Settings
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <EditProfile />
          <NotificationSettings />
          <PurchaseHistory />
        </div>
      </div>
    </div>
  );
}
