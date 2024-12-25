"use client";
import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import { useLocale, useTranslations } from "next-intl";
import { getFile, usersList } from "../api/serviceuser";

export default function Teachers() {
  const [users, setUsers] = useState<any>([]);
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const fetchImageFileById = async (id: string) => {
    try {
      const response = await getFile(id);
      if (response) {
        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);
        return imgUrl;
      }
    } catch (error) {
      console.error("Error fetching image file:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const param = { lang: locale };
      const params = new URLSearchParams(Object.entries<any>(param));

      const userList = (await usersList({ params })) as any;

      const usersWithImages = await Promise.all(
        userList.map(async (user: any) => {
          if (user.image && user.image._id) {
            const imgUrl = await fetchImageFileById(user.image._id);
            return { ...user, imgUrl };
          }
          return user;
        })
      );
      setUsers(usersWithImages);
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <div className="m-auto">
        <div className="border-2 flex justify-center m-auto items-center mt-4 max-w-[200px] h-[35px] text-[18px] font-bold font-neue border-[#4317FF] rounded-[32px] py-3 px-4 text-white">
          {t("team")}
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14 gap-7 max-w-[1280px] m-auto z-50">
        {users.map((teacher: any) => (
          <TeacherCard
            key={teacher._id}
            name={teacher.given_name}
            image={teacher.imgUrl}
            profession={teacher.position_name}
          />
        ))}
      </div>
    </div>
  );
}
