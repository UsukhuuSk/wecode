"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { Label } from "../../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../components/ui/radio-group";
import { useTranslations } from "next-intl";
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  work_id: any;
}

const Step3: React.FC<StepProps> = ({ next, back }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const trns = useTranslations("quiz");
  const { formValues, setFormValues } = useContext(FormContext)!;
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    getQuizRef()
  }, [])

  useEffect(() => {
    if (Helper.isNotEmptyList(options) && Helper.isNotEmptyList(formValues.purposes)) {
      setValues()
    }
  }, [options])

  const setValues = () => {

  }

  const getQuizRef = async () => {
    try {
      const { list } = await BaseApi._get('9/ref_student_quiz2')
      setOptions(list)
    } catch (error) {
      Helper.handleError(error)
    }
  }

  const onSubmit: SubmitHandler<Step2FormValues> = (data) => {
    if (!formValues.industry) return Helper.handleWarning(trns('step3Warning'))
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-2">
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          <span className="text-start font-bold text-[18px] text-[#3f3f46] font-neue">
            2.
          </span>  {trns("step3Title")}
        </h1>
      </div>

      <RadioGroup
        onValueChange={(value: any) => {
          const selected = options.find((option) => option._id === value);
          setFormValues({
            ...formValues,
            industry: { _id: selected?._id, name: selected?.name },
          });
        }}
        className="space-y-3"
      >
        {options.map((industry) => (
          <div key={industry._id} className="flex items-center space-x-2 hover:bg-blue-50 px-2 rounded-md cursor-pointer">
            <RadioGroupItem value={industry._id} id={industry._id} />
            <Label htmlFor={industry._id} className="text-base text-gray-700">
              {industry.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex gap-4">
        <button type="button" onClick={back} className="px-4 py-2 bg-gray-300 rounded-[32px]">
          {trns("account.back")}
        </button>
        <button
          type="submit"
          className="rounded-[32px] w-full text-white bg-[#4317FF] px-6 py-[12px] font-semibold text-[16px] font-neue"
        >
          {trns("account.continue")}
        </button>
      </div>
    </form>
  );
};

export default Step3;
