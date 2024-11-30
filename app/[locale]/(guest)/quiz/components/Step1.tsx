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
  age: string;
  address: string;
  city: string;
  aimag_city_id: string;
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
  const [refaimag_city_ids, setRefaimag_city_ids] = useState<any>([])
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
        fetchAndSetData('9/ref_aimag_cities', params, setRefaimag_city_ids),
        fetchAndSetData('9/ref_educations', params, setRefEdus),
      ]);
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<Step1FormValues> = (data) => {
    console.log("Form Data:", data);
    setFormValues({ ...formValues, ...data });
    if (next) next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-[#3f3f46] font-neue">Account Creation</h1>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-3">
            <Label htmlFor="given_name">{trns("account.firstName")}</Label>
            <Input
              {...register("given_name", { required: "First name is required" })}
              placeholder="First Name"
              defaultValue={formValues.given_name || ""}
              className="rounded-[32px]"
            />
            {errors.given_name && (
              <p className="text-red-500 text-sm">{errors.given_name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="surname">Last name</Label>
            <Input
              {...register("surname", { required: "Last name is required" })}
              placeholder="Last Name"
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
            <Label htmlFor="">Gender</Label>
            <Controller
              name="gender"
              control={control}
              defaultValue={formValues.gender_id || ""}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      genders.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="basis-1/2">
            <Label htmlFor="">Employment status</Label>
            <Controller
              name="work_id"
              control={control}
              defaultValue={formValues.work_id || ""}
              rules={{ required: "Employment status is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refEmp.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="basis-1/4">
            <Label htmlFor="">Age</Label>
            <Controller
              name="age"
              control={control}
              defaultValue={formValues.age || ""}
              rules={{ required: "age is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refAges.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="given_name">Address</Label>
            <Input
              {...register("address", { required: "Address is required" })}
              placeholder="Ex: BZD, 1-r khoroo, 10-22"
              defaultValue={formValues.address || ""}
              className="rounded-[32px]"
            />
            {errors.given_name && (
              <p className="text-red-500 text-sm">{errors.given_name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="city">City</Label>
            <Input
              {...register("city", { required: "City is required" })}
              placeholder="Ex: BZD, 1-r khoroo, 10-22"
              defaultValue={formValues.city || ""}
              className="rounded-[32px]"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <Label htmlFor="">aimag_city_id</Label>
            <Controller
              name="aimag_city_id"
              control={control}
              defaultValue={formValues.aimag_city_id || ""}
              rules={{ required: "aimag_city_id is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="max-h-80 overflow-auto">
                    {

                      refaimag_city_ids.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="">
            <Label htmlFor="">Education level</Label>
            <Controller
              name="education_id"
              control={control}
              defaultValue={formValues.education_id || ""}
              rules={{ required: "Education level is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {

                      refEdus.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Controller
            name="is_agreement"
            control={control}
            defaultValue={formValues.is_agreement || false}
            rules={{ required: "You must accept the terms and conditions" }}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <span className="flex items-center  gap-1">
            I agree with{" "}
            <a href="/terms" className="underline">
              Terms & Conditions
            </a>
          </span>
        </div>
        {errors.is_agreement && (
          <p className="text-red-500 text-sm text-center">
            {errors.is_agreement.message}
          </p>
        )}

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

export default Step1;
