"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  background: Object;
}

const Step5: React.FC<StepProps> = ({ next, back }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

  const onSubmit: SubmitHandler<Step2FormValues> = () => {
    console.log("FormValues", formValues);
    // if (next) next();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <span className="text-start font-bold text-[18px] text-[#3f3f46] font-neue">
          4.
        </span>
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          Do you have a background in coding, computer science, or a related
          field?
        </h1>
      </div>

      <div className="flex gap-4">
        <button type="button" onClick={back} className="px-4 py-2 bg-gray-300">
          Back
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5;
