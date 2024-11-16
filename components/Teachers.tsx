"use client";
import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useTranslations } from "next-intl";
import { usersList } from "../api/serviceuser";

export default function Teachers() {
  const [users, setUsers] = useState<any>([]);
  const t = useTranslations("HomePage");
  useEffect(() => {
    const fetchUsers = async () => {
      const param = { pageSize: 10, offset: 0, lang: "mn" };
      const params = new URLSearchParams(Object.entries<any>(param));
      console.log(params.toString());
      const userList = await usersList({ params });
      console.log(users);
      setUsers(userList);
      // const findImages = await Promise.all(
      //   users.map(async (user: any) => {
      //     if (user.image && user.image._id) {
      //       try {
      //         const imageFile = await getFile(user.image._id);
      //         return {
      //           ...user,
      //           image: { ...user.image, url: imageFile?.url },
      //         };
      //       } catch (error) {
      //         console.error("Error fetching image:", error);
      //         return user;
      //       }
      //     }
      //     return user;
      //   })
      // );

      // setUsers(findImages);
    };
    fetchUsers();
  }, []);
  return (
    <div className="">
      <div className=" m-auto">
        <div className="w-auto max-w-[300px] m-auto rounded-[32px] bg-[#4317FF] py-3 px-12 flex justify-center items-center text-white text-sm font-semibold tracking-[0.151px]">
          {t("team")}
        </div>
      </div>

      <div className=" mt-16 lg:gap-14 gap-7 max-w-[1280px] m-auto z-50">
        <Carousel>
          <CarouselContent>
            {users.map((teacher: any) => (
              <CarouselItem className="basis-1/3" key={teacher._id}>
                <TeacherCard
                  name={teacher.name}
                  image={teacher.image?.originalname}
                  profession={teacher.profession}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white h-12 w-12" />
          <CarouselNext className="bg-white h-12 w-12" />
        </Carousel>
      </div>
    </div>
  );
}
