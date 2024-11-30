"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { Label } from "../../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../components/ui/radio-group";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  work_id: Object;
}

const Step3: React.FC<StepProps> = ({ next, back }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

  const OPTIONS = [
    {
      id: "1",
      label: "Student",
    },
    {
      id: "2",
      label: "Information Technology",
    },
    {
      id: "3",
      label: "Healthcare",
    },
    {
      id: "4",
      label: "Financial",
    },
    {
      id: "5",
      label: "Industrial",
    },
    {
      id: "6",
      label: "Sales",
    },
    {
      id: "7",
      label: "Government and public services",
    },
    {
      id: "8",
      label: "Media",
    },
    {
      id: "9",
      label: "Other",
    },
  ];

  const onSubmit: SubmitHandler<Step2FormValues> = (data) => {
    console.log("FormValues", formValues);
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-2">
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          Self Promise
        </h1>
      </div>

      <p className="font-medium text-[16px] font-neue text-[#52525b]">
        I am starting an online learning program at Al Academy. I know that
        learning can be challenging, but I have the patience, determination, and
        discipline to achieve my goals. If I get stuck, I will look for the
        following solutions…
      </p>
      <div className="flex gap-4">
        <button type="button" onClick={back} className="px-4 py-2 bg-gray-300 rounded-[32px]">
          Back
        </button>
        <button
          type="submit"
          className="rounded-[32px] w-full text-white bg-[#4317FF] px-6 py-[12px] font-semibold text-[16px] font-neue"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default Step3;
