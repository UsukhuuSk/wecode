"use client";

import { useLocale } from "next-intl";
import React, { useTransition, ChangeEvent, startTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function LocaleSwitcher() {
  const [isPending, setIsPending] = useTransition();
  const router = useRouter();
  const current = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      const nextLocale = e.target.value;
      const currentPath = pathname.replace(/^\/(mn|en)/, `/${nextLocale}`);
      const updatedPath = `${currentPath}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`; 
      router.replace(updatedPath);
    });
  };

  return (
    <>
      <select
        className="custom p-2 bg-transparent "
        defaultValue={current}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="text-primary" value="en">EN</option>
        <option className="text-primary" value="mn">MN</option>
      </select>
    </>
  );
}
