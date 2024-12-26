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
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      {/* <div className="m-auto">
        <div className="border-2 flex justify-center m-auto items-center mt-4 max-w-[200px] h-[35px] text-[18px] font-bold font-neue border-primary text-primary rounded-[32px] py-3 px-4 ">
          {t("team")}
        </div>
      </div> */}
      <p className="text-2xl font-bold mb-2 font-neue text-center">
        {t("team")}
      </p>


      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 m-auto z-50">
        {users.map((teacher: any) => (
          <TeacherCard
            key={teacher._id}
            name={teacher.given_name}
            image={teacher.image}
            profession={teacher.position_name}
          />
        ))}
      </div>
    </div>
  );
}
