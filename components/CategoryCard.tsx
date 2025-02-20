import React from "react";
import { cn, GetFileUrl } from "../lib/utils";

import {
  Brain02Icon,
  CodeCircleIcon,
  RoboticIcon,
  StarsIcon,
  CodeFolderIcon,
  AudioBook01Icon,
  Database01Icon,
} from "@hugeicons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

type IconProps = {
  size?: number;
  variant?: string;
};

type Category = {
  _id: any
  name: string;
  icon?: React.ComponentType<any>;
  className: string;
  image: any;
  color: string;
};

export default function CategoryCard({
  _id,
  name,
  icon: Icon,
  className,
  image,
  color,
}: Category) {
  const locale = useLocale()
  return (
    <Link
      href={`/${locale}/course?s=${_id}`}
      style={{ borderColor: color }}
      className={cn(
        `hover:bg-[#FFFFFF30] flex-1 lg:px-4 px-4 py-2 xl:px-6 xl:py-4 border-[2px] w-full rounded-[32px] flex items-center gap-[10px] justify-start  `,
        className
      )}
    >
      <div className="flex-shrink-0 flex justify-start items-center">
        {/* <Icon size={24} variant={"bulk"} color={color} /> */}
        {/* <Brain02Icon variant={"bulk"} color={color} /> */}
        {image && <img className="h-6" src={GetFileUrl(image._id)} />}
      </div>

      <p style={{ color }} className="text-[14px] font-semibold text-nowrap max-w-[80%] truncate">
        {name}
      </p>
    </Link>
  );
}
