// steps/Step1.tsx
import React, { useContext } from "react";
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

interface StepProps {
  next?: () => void;
  back?: () => void;
}
interface Step1FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  employmentStatus: string;
  age: string;
  address: string;
  city: string;
  region: string;
  educationLevel: string;
  acceptTerms: boolean;
}

const Step1: React.FC<StepProps> = ({ next }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormValues>();
  const { formValues, setFormValues } = useContext(FormContext)!;

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
            <Label htmlFor="firstName">First name</Label>
            <Input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              defaultValue={formValues.firstName || ""}
              className="rounded-[32px]"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              defaultValue={formValues.lastName || ""}
              className="rounded-[32px]"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="max-w-[100px]">
            <Label htmlFor="">Gender</Label>
            <Controller
              name="gender"
              control={control}
              defaultValue={formValues.gender || ""}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="none">I prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="max-w-[220px] min-w-[220px] col-span-2">
            <Label htmlFor="">Employment status</Label>
            <Controller
              name="employmentStatus"
              control={control}
              defaultValue={formValues.employmentStatus || ""}
              rules={{ required: "Employment status is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="student">Highschool student</SelectItem>
                    <SelectItem value="bachelor">Bachelor's student</SelectItem>
                    <SelectItem value="self">Self-employment</SelectItem>
                    <SelectItem value="civil">Civil servant</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="max-w-[100px]">
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
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="firstName">Address</Label>
            <Input
              {...register("address", { required: "Address is required" })}
              placeholder="Ex: BZD, 1-r khoroo, 10-22"
              defaultValue={formValues.address || ""}
              className="rounded-[32px]"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
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
            <Label htmlFor="">Region</Label>
            <Controller
              name="region"
              control={control}
              defaultValue={formValues.region || ""}
              rules={{ required: "Region is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="">
            <Label htmlFor="">Education level</Label>
            <Controller
              name="educationLevel"
              control={control}
              defaultValue={formValues.educationLevel || ""}
              rules={{ required: "Education level is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className=" rounded-[32px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="graduate">
                      Highschool Graduate
                    </SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="college">College Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="doctor">Doctorate Degree</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Controller
            name="acceptTerms"
            control={control}
            defaultValue={formValues.acceptTerms || false}
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
        {errors.acceptTerms && (
          <p className="text-red-500 text-sm text-center">
            {errors.acceptTerms.message}
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
