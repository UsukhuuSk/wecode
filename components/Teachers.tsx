import React from "react";
import { teachers } from "../data/dummy";
import TeacherCard from "./TeacherCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

export default function Teachers() {
  return (
    <div className=" m-auto ">
      <div className=" m-auto">
        <span className="teachGrad ovsoge font-bold text-[64px] text-center flex justify-center">
          Our team
        </span>
      </div>

      <div className=" mt-16 lg:gap-14 gap-7 max-w-[1280px] m-auto">
        <Carousel>
          <CarouselContent>
            {teachers.map((teacher, index) => (
              <CarouselItem
                className="basis-1 mr-1 lg:mr-0 lg:basis-1/4"
                key={index}
              >
                <TeacherCard
                  name={teacher.name}
                  image={teacher.image}
                  profession={teacher.profession}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
