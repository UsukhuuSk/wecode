"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { Checkbox } from "../../../../../components/ui/checkbox";
import { Label } from "../../../../../components/ui/label";
import { useTranslations } from "next-intl";
import { Helper } from "@/lib/helper";
import { BaseApi } from "@/api/baseApi";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  purposes: string[];
}

const Step2: React.FC<StepProps> = ({ next, back }) => {
  const trns = useTranslations("quiz");
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [options, setOptions] = useState<any[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

  useEffect(() => {
    getQuizRef()
  }, [])

  useEffect(() => {
    if (Helper.isNotEmptyList(options) && Helper.isNotEmptyList(formValues.purposes)) {
      setValues()
    }
  }, [options])

  const setValues = () => {
    setSelectedOptions(formValues.purposes)
  }

  const getQuizRef = async () => {
    try {
      const { list } = await BaseApi._get('9/ref_student_quiz1')
      setOptions(list)
    } catch (error) {
      Helper.handleError(error)
    }
  }


  const handleCheckboxChange = (checked: boolean, id: string) => {
    if (checked) {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, id]);
      }
    } else {
      setSelectedOptions(selectedOptions.filter((option: any) => option !== id));
    }
  };

  const onSubmit: SubmitHandler<Step2FormValues> = () => {
    if (selectedOptions.length === 0) return Helper.handleWarning(trns('step3Warning'))
    setFormValues({ ...formValues, purposes: selectedOptions });
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-2">
        <span className="text-start font-bold text-[18px] text-[#3f3f46] font-neue">
          1.
        </span>
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          {trns("step2Title")}
        </h1>
      </div>

      <div className="space-y-4">
        {options.map((option) => (
          <div key={option._id} className="flex items-center space-x-3">
            <Checkbox
              id={option._id}
              checked={selectedOptions.includes(option._id)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(checked as boolean, option._id)
              }
              disabled={
                !selectedOptions.includes(option._id) &&
                selectedOptions.length >= 3
              }
            />
            <Label
              htmlFor={option._id}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.name}
            </Label>
          </div>
        ))}

        {errors.purposes && (
          <p className="text-red-500 text-sm text-center">
            {errors.purposes.message}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <button type="button" onClick={back} className="px-4 py-2 bg-gray-300 rounded-[32px]">
          {trns("account.back")}
        </button>
        <button
          type="submit"
          className="rounded-[32px] w-full text-white bg-primary px-6 py-[12px] font-semibold text-[16px] font-neue"
        >
          {trns("account.continue")}
        </button>
      </div>
    </form>
  );
};

export default Step2;
