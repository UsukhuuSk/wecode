"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { BaseApi } from "../../../../../api/baseApi";
import { useAuth } from "../../../../../context/AuthContext";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  background: Object;
}

const Step5: React.FC<StepProps> = ({ next, back }) => {
  const { user }: any = useAuth()
  const tags = [
    {
      "name": "Take a deep breath",
      "color": "#CC48F4"
    },
    {
      "name": "Break the problem down into smaller parts",
      "color": "#9060F4"
    },
    {
      "name": "Ask for help",
      "color": "#68D8FC"
    },
    {
      "name": "Do research",
      "color": "#6068F4"
    },
    {
      "name": "Be positive",
      "color": "#FF8500"
    },
    {
      "name": "Discuss your thoughts with others or yourself",
      "color": "#94C943"
    }
  ]

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

  const onSubmit: SubmitHandler<Step2FormValues> = async () => {
    console.log("FormValues", formValues);
    // if (next) next();
    try {
      await BaseApi._post('/9/service_user_profile', { _id: user._id, ...formValues })
    } catch (error) {

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex gap-2">
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          Self Promise
        </h1>
      </div>

      <p className="font-medium text-[16px] font-neue text-[#52525b] text-center">
        I am starting an online learning program at Al Academy. I know that
        learning can be challenging, but I have the patience, determination, and
        discipline to achieve my goals. If I get stuck, I will look for the
        following solutions…
      </p>
      <div className="flex gap-x-3 gap-y-2 w-[550px] flex-wrap justify-center mb-6 mt-3">
        {
          tags.map(t => {
            return (
              <div className="text-white text-nowrap px-3 text-sm" style={{ background: t.color }}> {t.name}</div>
            )
          })
        }
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="rounded-[32px] w-full text-white bg-[#4317FF] px-6 py-[12px] font-semibold text-[16px] font-neue"
        >
          I promise to complete this course in full
        </button>
      </div>
    </form>
  );
};

export default Step5;
