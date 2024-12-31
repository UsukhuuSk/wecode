import { DeleteAccount } from "@/components/profile/DeleteAccount";
import EditProfile from "@/components/profile/EditProfile";
import NotificationSettings from "@/components/profile/NotificationSettings";
import PurchaseHistory from "@/components/profile/PurchaseHistory";
import { useTranslations } from "next-intl";
import settings from "@/assets/settings.png"
import React from "react";
import Image from "next/image";


export default function Settings() {
  const trns = useTranslations('profile')


  return (
    <div className="min-h-screen container pt-[100px] pb-8 overflow-hidden bg-[#13032B] md:bg-transparent">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-primary blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex items-center gap-[10px] pt-4 pb-8 border-b border-slate-700">
        <Image src={settings} alt="" />
        <h1 className="text-white text-[36px] font-bold font-adineue">
          {trns('settings')}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-12 md:col-span-8">
          <EditProfile />
        </div>
        <div className="col-span-12 md:col-span-4 w-full flex flex-col justify-between gap-4 text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787] h-full">
          <div>
            <h1 className="text-[20px] font-adineue font-bold md:text-center text-left mb-6">
              {trns('settings')}
            </h1>
            <NotificationSettings />
          </div>
          <DeleteAccount />
        </div>
        <div className="col-span-12">
          <PurchaseHistory />
        </div>
      </div>
    </div>
  )
}
