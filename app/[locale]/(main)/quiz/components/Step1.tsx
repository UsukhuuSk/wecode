// steps/Step1.tsx
import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormContext } from "../../../../../context/FormContext";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Checkbox } from "../../../../../components/ui/checkbox";
import { BaseApi } from "../../../../../api/baseApi";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface StepProps {
  next?: () => void;
  back?: () => void;
}
interface Step1FormValues {
  given_name: string;
  surname: string;
  gender: string;
  work_id: string;
  age_id: string;
  address: string;
  city_name: string;
  country_id: string;
  education_id: string;
  is_agreement: boolean;
}

const fetchAndSetData = async (endpoint: any, params: any, setter: any) => {
  try {
    const { list } = await BaseApi._get(endpoint, params);
    setter(list);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
  }
};


const Step1: React.FC<StepProps> = ({ next }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormValues>();
  const trns = useTranslations("quiz");

  const { formValues, setFormValues } = useContext(FormContext)!;
  const [genders, setGenders] = useState<any>([])
  const [refEmp, setRefEmp] = useState<any>([])
  const [refAges, setRefAges] = useState<any>([])
  const [refCountries, setRefCountries] = useState<any>([])
  const [refEdus, setRefEdus] = useState<any>([])
  const { locale } = useParams()


  useEffect(() => {
    const lang = locale;
    const params = { fields: '_id,code,name', lang };

    const fetchData = async () => {
      await Promise.all([
        fetchAndSetData('9/ref_genders', params, setGenders),
        fetchAndSetData('9/ref_works', params, setRefEmp),
        fetchAndSetData('9/ref_ages', params, setRefAges),
        fetchAndSetData('9/ref_countries', params, setRefCountries),
        fetchAndSetData('9/ref_educations', params, setRefEdus),
      ]);
    };

    fetchData();
  }, []);

  const handleSpanClick = () => {
    setFormValues((prev: any) => {
      return { ...prev, is_agreement: !prev.is_agreement }
    })
  };

  const onSubmit: SubmitHandler<Step1FormValues> = (data) => {
    setFormValues({ ...formValues, ...data });
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-[#3f3f46] font-neue">{trns("account.create")}</h1>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-3">
            <Label htmlFor="given_name">{trns("account.firstName")}</Label>
            <Input
              {...register("given_name", { required: trns("account.firstNameR") })}
              placeholder={trns("account.firstName")}
              defaultValue={formValues.given_name || ""}
              className="rounded-[32px]"
            />
            {errors.given_name && (
              <p className="text-red-500 text-sm">{errors.given_name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="surname">{trns("account.lastName")}</Label>
            <Input
              {...register("surname", { required: trns("account.lastNameR") })}
              placeholder={trns("account.lastName")}
              defaultValue={formValues.surname || ""}
              className="rounded-[32px]"
            />
            {errors.surname && (
              <p className="text-red-500 text-sm">{errors.surname.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="basis-1/4">
            <Label htmlFor="">{trns("account.gender")}</Label>
            <Controller
              name="gender"
              control={control}
              defaultValue={formValues.gender_id || ""}
              rules={{ required: trns("account.genderR") }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}
                >
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder={trns("account.select")} />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      genders.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div className="basis-1/2">
            <Label htmlFor="">{trns("account.employment")}</Label>
            <Controller
              name="work_id"
              control={control}
              defaultValue={formValues.work_id || ""}
              rules={{ required: trns("account.employmentR") }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="rounded-[32px]">
                    <SelectValue placeholder={trns("account.select")} />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refEmp.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
            {errors.work_id && (
              <p className="text-red-500 text-sm">{errors.work_id.message}</p>
            )}
          </div>
          <div className="basis-1/4">
            <Label htmlFor="">{trns("account.age")}</Label>
            <Controller
              name="age_id"
              control={control}
              defaultValue={formValues.age_id || ""}
              rules={{ required: trns("account.ageR") }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder={trns("account.select")} />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refAges.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
            {errors.age_id && (
              <p className="text-red-500 text-sm">{errors.age_id.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="given_name">{trns("account.address")}</Label>
            <Input
              {...register("address", { required: trns("account.addressR") })}
              placeholder={trns("account.addressP")}
              defaultValue={formValues.address || ""}
              className="rounded-[32px]"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="city">{trns("account.city")}</Label>
            <Input
              {...register("city_name", { required: trns("account.cityR") })}
              placeholder={trns("account.addressP")}
              defaultValue={formValues.city_name || ""}
              className="rounded-[32px]"
            />
            {errors.city_name && (
              <p className="text-red-500 text-sm">{errors.city_name.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <Label htmlFor="">{trns("account.region")}</Label>
            <Controller
              name="country_id"
              control={control}
              defaultValue={formValues.country_id || ""}
              rules={{ required: trns("account.regionR") }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder={trns("account.select")} />
                  </SelectTrigger>
                  <SelectContent className="max-h-80 overflow-auto">
                    {

                      refCountries.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country_id && (
              <p className="text-red-500 text-sm">{errors.country_id.message}</p>
            )}
          </div>
          <div className="">
            <Label htmlFor="">{trns("account.education")}</Label>
            <Controller
              name="education_id"
              control={control}
              defaultValue={formValues.education_id || ""}
              rules={{ required: trns("account.educationR") }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder={trns("account.select")} />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refEdus.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
            {errors.education_id && (
              <p className="text-red-500 text-sm">{errors.education_id.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Controller
            name="is_agreement"
            control={control}
            defaultValue={formValues.is_agreement || false}
            rules={{ required: trns("account.conditionR") }}
            render={({ field }) => (
              <>
                <Checkbox
                className=""
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <span className="flex items-center  gap-1">
                  <span onClick={()=>field.onChange(!field.value)} className="cursor-pointer">
                    {trns("account.agreeWith")}
                  </span>

                  {" "}
                  <a href="/terms" className="underline">
                    {trns("account.condition")}

                  </a>
                </span>
              </>

            )}
          />

        </div>
        {errors.is_agreement && (
          <p className="text-red-500 text-sm text-center">
            {errors.is_agreement.message}
          </p>
        )}

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

export default Step1;
