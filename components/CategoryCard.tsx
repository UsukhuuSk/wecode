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
  color: string;
};

export default function CategoryCard({
  name,
  icon: Icon,
  className,
  color,
}: Category) {
  return (
    <div
      style={{ borderColor: color }}
      className={cn(
        `flex-1 px-6 py-4 border min-w-[236px] rounded-[32px] flex items-center gap-[10px] justify-start`,
        className
      )}
    >
      <div className="flex-shrink-0 flex justify-start items-center">
        <Icon size={24} variant={"bulk"} color={color} />
      </div>

      <p style={{ color }} className="text-[14px] font-semibold">
        {name}
      </p>
    </div>
  );
}
