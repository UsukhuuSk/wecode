import React from "react";
import Form from "./components/Form";

export default function Quiz() {
  return (
    <div className="relative">
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px] -z-50"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px] -z-50"></div>
      <div className="">
        <Form />
      </div>
    </div>
  );
}
