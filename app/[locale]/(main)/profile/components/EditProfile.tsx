"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import Cookies from "js-cookie";
import { Button } from "../../../../../components/ui/button";
import { Camera01Icon } from "@hugeicons/react";

const formSchema = z.object({
  given_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  gender_id: z.string(),
  aimag_city_id: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  region: z.string().min(2, {
    message: "Region must be at least 2 characters.",
  }),
  profileImage: z.any().optional(),
});
export default function EditProfile() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      given_name: "",
      surname: "",
      gender_id: "",
      aimag_city_id: "",
      city: "",
      region: "",
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setProfileImage(file);
    }
  };
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get("authToken");
  async function getProfileData() {
    try {
      const response = await fetch(`${BASEURL}/one/9/service_user_profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userDetails = await response.json();

      return userDetails;
    } catch (error) {}
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const userDetails = await getProfileData();
        console.log(userDetails);
        if (userDetails) {
          form.reset({
            given_name: userDetails.given_name || "",
            surname: userDetails.surname || "",
            gender_id: userDetails.gender_id.name || "",
            aimag_city_id: userDetails.aimag_city_id.name || "",
            city: userDetails.city || "",
            region: userDetails.region || "",
          });
          if (userDetails.profileImage) {
            setImagePreview(userDetails.profileImage);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const jsonData = {
        ...values,
        profileImage: profileImage,
      };

      //   const response = await fetch("/api/user", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(jsonData),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Failed to submit form");
      //   }

      //   const data = await response.json();
      console.log("Success:", jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="w-full text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="flex flex-col gap-8">
        <h1 className="text-[20px] font-adineue font-bold">Profile settings</h1>
        <div className="">
          <Image src={""} alt="" />
        </div>
        <div className="">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="profileImage"
                className="relative cursor-pointer block w-[100px] h-[100px] rounded-full overflow-hidden bg-[#fff]"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile preview"
                    className="w-full h-full object-cover z-20"
                  />
                ) : (
                  ""
                )}
                <div className="absolute bottom-[10%] translate-x-1/2 right-1/2 bg-[#13032B] rounded-full p-1 z-[150]">
                  <Camera01Icon color="#fff" size={20} variant="solid" />
                </div>
              </label>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full "
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="given_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="gender_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#13032bcc] text-white border-none">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name="gender_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Gender</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#13032bda] text-white border-none">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="aimag_city_id"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1">
                      <FormLabel className="text-white">Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address"
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="City"
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Region</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Region"
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className=" rounded-[32px] px-6 py-3 bg-[#4317FF] hover:bg-[#4317FF] text-white font-semibold"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
