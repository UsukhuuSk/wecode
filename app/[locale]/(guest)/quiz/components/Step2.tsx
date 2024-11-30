"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { Checkbox } from "../../../../../components/ui/checkbox";
import { Label } from "../../../../../components/ui/label";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  purposes: string[];
}

const Step2: React.FC<StepProps> = ({ next, back }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

  const OPTIONS = [
    {
      id: "career",
      label: "Career advancement (e.g., promotion, skill development)",
    },
    {
      id: "academic",
      label:
        "Pursuing academic education (e.g., studying independently to deepen your schoolwork)",
    },
    {
      id: "personal",
      label:
        "Personal interests/hobbies (e.g., learning out of interest or curiosity)",
    },
    {
      id: "business",
      label: "Starting a business or self-employment",
    },
    {
      id: "technical",
      label: "Acquire technical skills for future career opportunities",
    },
    {
      id: "other",
      label: "Other",
    },
  ];
  const handleCheckboxChange = (checked: boolean, id: string) => {
    if (checked) {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, id]);
      }
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== id));
    }
  };

  const onSubmit: SubmitHandler<Step2FormValues> = () => {
    console.log("Form Data:", selectedOptions);
    setFormValues({ ...formValues, purposes: selectedOptions });
    console.log("FormValues", formValues);
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-2">
        <span className="text-start font-bold text-[18px] text-[#3f3f46] font-neue">
          1.
        </span>
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          What would you describe as your main purpose for using this platform?
        </h1>
      </div>

      <div className="space-y-4">
        {OPTIONS.map((option) => (
          <div key={option.id} className="flex items-center space-x-3">
            <Checkbox
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(checked as boolean, option.id)
              }
              disabled={
                !selectedOptions.includes(option.id) &&
                selectedOptions.length >= 3
              }
            />
            <Label
              htmlFor={option.id}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
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

export default Step2;
