"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import { Switch } from "../ui/switch";

export default function NotificationSettings() {
  const trns = useTranslations('profile')
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [id, setId] = useState(null)

  useEffect(() => {
    getSettings()
  }, [])



  const getSettings = async () => {
    try {
      const data = await BaseApi._get('/one/9/service_notification_setting');
      console.log('data', data)
      setPushEnabled(data.is_not_push)
      setEmailEnabled(data.is_not_email)
      setId(data._id)

    } catch (error) {
      Helper.handleError(error)
    }
  }

  const handleUpdate = async (data: any) => {
    try {
      await BaseApi._post('/9/service_notification_setting', { _id: id, ...data });
      Helper.handleSuccess('Changed')
    } catch (error) {
      Helper.handleError(error)
    }
  }

  async function handlePushToggle(checked: boolean) {
    setPushEnabled(checked);
    handleUpdate({
      "is_not_push": !checked,
      "is_not_email": !emailEnabled
    })
  }

  async function handleEmailToggle(checked: boolean) {
    setEmailEnabled(checked);
    handleUpdate({
      "is_not_push": !pushEnabled,
      "is_not_email": !checked
    })
  }

  return (
    <div className="w-full flex flex-col gap-4 text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-white">Push notifications</h3>
          <p className="text-sm text-purple-300">
            {trns('pushDesc')}
          </p>
        </div>
        <Switch
          checked={pushEnabled}
          onCheckedChange={handlePushToggle}
          className="bg-[#33415566] data-[state=checked]:bg-[#22C55E]"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-white">
            E-Mail notifications
          </h3>
          <p className="text-sm text-purple-300">
            {trns('emailDesc')}
          </p>
        </div>
        <Switch
          checked={emailEnabled}
          onCheckedChange={handleEmailToggle}
          className="data-[state=checked]:bg-[#22C55E] bg-[#33415566]"
        />
      </div>
    </div>
  );
}
