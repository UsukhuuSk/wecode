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
        `px-6 py-4 border  rounded-[32px] flex items-center gap-[10px] justify-center`,
        className
      )}
    >
      <Icon {...iconProps} />
      {/* {icon} */}

      <p className={` text-[14px] font-semibold`}>{name}</p>
      {/* <div>{color}</div> */}
    </div>
  );
}
