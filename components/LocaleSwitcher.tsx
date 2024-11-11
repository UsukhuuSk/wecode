"use client";

import { useLocale } from "next-intl";
import React, { useTransition, ChangeEvent, startTransition } from "react";
import { useRouter } from "next/navigation";
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
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <>
      <select
        className="custom p-2"
        defaultValue={current}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="mn">MN</option>
      </select>
    </>
  );
}
