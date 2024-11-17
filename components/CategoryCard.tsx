import React from "react";
import { cn } from "../lib/utils";
type IconProps = {
  size?: number;
  variant?: string;
};

type Category = {
  name: string;
  icon: React.ComponentType<any>;
  className: string;
  iconProps?: IconProps;
};

export default function CategoryCard({
  name,
  icon: Icon,
  className,
  iconProps,
}: Category) {
  console.log(iconProps);
  return (
    <div
      className={cn(
        `flex-1 px-6 py-4 border min-w-[236px] rounded-[32px] flex items-center gap-[10px] justify-start`,
        className
      )}
    >
      <div className=" flex-shrink-0 flex justify-start items-center">
        <Icon {...iconProps} />
      </div>
      <p className={` text-[14px] font-semibold`}>{name}</p>
    </div>
  );
}
