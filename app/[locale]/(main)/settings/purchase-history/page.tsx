import React from "react";
import Image from "next/image";
import settings from "../../../../../assets/settings.png";
import Link from "next/link";
import { Invoice01Icon } from "@hugeicons/react";
import EditProfile from "../../profile/components/EditProfile";
import NotificationSettings from "../../profile/components/NotificationSettings";
import PurchaseHistory from "../../profile/components/PurchaseHistory";

export default function Settings() {
  return (
    <div className="flex flex-col gap-8">
      <PurchaseHistory />
    </div>
  );
}
