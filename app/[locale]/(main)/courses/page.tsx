"use client";
import React from "react";

import Image from "next/image";
import purple from "../../../../assets/soon/purplecircle.png";
import { useTranslations } from "next-intl";
import { categories } from "../../../../constants/constants";
import CategoryCard from "../../../../components/CategoryCard";
import { useRouter } from "next/navigation";

export default function page({ params }: any) {
  const t = useTranslations("Soon");
  const router = useRouter();
  const locale = params?.locale;
  router.push(`/${locale}/course`);
  return (
    <main className="h-full min-h-screen relative m-auto pt-[200px] overflow-hidden px-5">
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
      <div className="flex flex-col justify-center items-center gap-16 relative ">
        <div className="soon text-center font-adineue text-5xl xl:text-8xl">
          {t("soon")}
        </div>
        <div className="flex flex-col gap-5 items-center z-50">
          <div className="grid xl:grid-cols-4 text-center gap-5">
            {categories.slice(0, 4).map((category, index) => (
              <CategoryCard
                image={null}
                key={index}
                name={category.name}
                className={category.className}
                icon={category.icon}
                color={category.color} _id={undefined}
              />
            ))}
          </div>
          <div className="grid xl:grid-cols-3 text-center gap-5 m-auto">
            {categories.slice(4, 7).map((category, index) => (
              <CategoryCard
                image={null}
                key={index}
                name={category.name}
                className={category.className}
                icon={category.icon}
                color={category.color} _id={undefined} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden h-[200px] xl:h-[450px]">
          <Image
            src={purple}
            alt=""
            width={1004}
            height={1004}
            className="-rotate-45 bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </main>
  );
}
