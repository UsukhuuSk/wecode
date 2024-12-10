"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { BaseApi } from "../../../../../api/baseApi";
import { useAuth } from "../../../../../context/AuthContext";
import { useTranslations } from "next-intl";
import { Helper } from "../../../../../lib/helper";
import { useRouter } from "next/navigation";

interface StepProps {
  next?: () => void;
  back?: () => void;
}

interface Step2FormValues {
  background: any;
}

const Step5: React.FC<StepProps> = ({ next, back }) => {
  const { login } = useAuth()
  const { user }: any = useAuth()
  const trns = useTranslations("quiz.promise");
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const [created, setCreated] = useState<boolean>(false)
  const tags = [
    {
      "name": trns("tag1"),
      "color": "#CC48F4"
    },
    {
      "name": trns("tag2"),
      "color": "#9060F4"
    },
    {
      "name": trns("tag3"),
      "color": "#68D8FC"
    },
    {
      "name": trns("tag4"),
      "color": "#6068F4"
    },
    {
      "name": trns("tag5"),
      "color": "#FF8500"
    },
    {
      "name": trns("tag6"),
      "color": "#94C943"
    }
  ]

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormValues>();
  const { formValues, setFormValues } = useContext<any>(FormContext)!;

  const onSubmit: SubmitHandler<Step2FormValues> = async () => {
    try {
      const quizData = {
        "student_id": user._id,
        "quiz1_id": formValues.purposes[0],
        "quiz2_id": formValues.industry._id,
        "quiz3_id": formValues.computerScience._id,
        "quiz1_text": formValues.industry.name,
        "quiz2_text": formValues.industry.name,
        "is_promise": true
      }
      setLoading(true)
      await BaseApi._post('9/service_user_profile', { _id: user._id, ...formValues })
      await BaseApi._post('9/service_student_quizs', quizData)
      await Helper.wait();
      Helper.handleSuccess(trns('success'))
      setCreated(true)
      await login()
      await Helper.wait();
      router.push('/profile')
    } catch (error) {
      Helper.handleError(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex gap-2">
        <h1 className="text-start text-[18px] text-[#3f3f46] font-neue">
          {trns("self")}
        </h1>
      </div>

      <p className="font-medium text-[16px] font-neue text-[#52525b] text-center">
        {trns("selfDesc")}
      </p>
      <div className="flex gap-x-3 gap-y-2 w-[550px] flex-wrap justify-center mb-6 mt-3">
        {
          tags.map((t: any, i: number) => {
            return (
              <div key={i} className="text-white text-nowrap px-3 text-sm" style={{ background: t.color }}> {t.name}</div>
            )
          })
        }
      </div>
      <div className="flex gap-4">
        <button
          disabled={loading || created}
          type="submit"
          className={`${created ? 'bg-green-500' : ''} ${loading ? 'bg-slate-500 text-slate-70 animate-pulse' : ''} rounded-[32px] w-full text-white bg-[#4317FF] px-6 py-[12px] font-semibold text-[16px] font-neue"`}
        >
          {created ? trns('accCreated') : (loading ? trns('creating') : trns('btnText'))}
        </button>
      </div>
    </form>
  );
};

export default Step5;
