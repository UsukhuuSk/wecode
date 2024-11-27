"use client";

import { useState } from "react";
import { Switch } from "../../../../../components/ui/switch";
// import { updateNotificationSetting } from "./actions/notifications";

export default function NotificationSettings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  async function handlePushToggle(checked: boolean) {
    setPushEnabled(checked);
    //   await updateNotificationSetting("push", checked);
  }

  async function handleEmailToggle(checked: boolean) {
    setEmailEnabled(checked);
    //   await updateNotificationSetting("email", checked);
  }

  return (
    <div className="w-full text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-white">Push notifications</h3>
          <p className="text-sm text-purple-300">
            Notifications of this kind will send you directly to your phone of
            new updates.
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
            Notifications of this kind will send you directly to your phone of
            new updates.
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
