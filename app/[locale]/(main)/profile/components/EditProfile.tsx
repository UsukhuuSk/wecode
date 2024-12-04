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
import { BaseApi } from "../../../../../api/baseApi";
import { Helper } from "../../../../../lib/helper";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

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
  profileImage: z.any().optional(),
});

const fetchAndSetData = async (endpoint: any, params: any, setter: any) => {
  try {
    const { list } = await BaseApi._get(endpoint, params);
    setter(list);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
  }
};


export default function EditProfile() {
  const { locale } = useParams()

  const trns = useTranslations('profile')
  const trnsAcc = useTranslations("quiz");

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [genders, setGenders] = useState<any>([])
  const [user, setUser] = useState<any>(null)
  const [refEmp, setRefEmp] = useState<any>([])
  const [refAges, setRefAges] = useState<any>([])
  const [refaimag_city_ids, setRefaimag_city_ids] = useState<any>([])
  const [refEdus, setRefEdus] = useState<any>([])


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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      given_name: "",
      surname: "",
      gender_id: "",
      aimag_city_id: "",
      city: "",
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
    } catch (error) { }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const userDetails = await getProfileData();
        if (userDetails) {
          setUser(userDetails)
          form.reset({
            given_name: userDetails.given_name || "",
            surname: userDetails.surname || "",
            gender_id: userDetails.gender_id._id || "",
            aimag_city_id: userDetails.aimag_city_id._id || "",
            city: userDetails.city || "",
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
      // setSaving(true)
      await BaseApi._post('/9/service_user_profile', { _id: user?._id, profileImage: profileImage, ...form.getValues() })
      await Helper.wait();
      Helper.handleSuccess(trns('updateSuccess'))
    } catch (error) {
      Helper.handleError(error);
    } finally {
      // setSaving(false)
    }
  }
  return (
    <div className="w-full text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="flex flex-col gap-8">
        <h1 className="text-[20px] font-adineue font-bold">{trns('profileSettings')}</h1>
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
                      <FormLabel className="text-white">{trnsAcc("account.firstName")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={trnsAcc("account.firstName")}
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
                      <FormLabel className="text-white">{trnsAcc("account.lastName")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={trnsAcc("account.lastName")}
                          className="bg-[#13032bcc] text-white border-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{trnsAcc("account.gender")}</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#13032bda] text-white border-none">
                            <SelectValue placeholder={trnsAcc("account.select")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {

                            genders.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                          }
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
                    <FormItem>
                      <FormLabel className="text-white">{trnsAcc("account.region")}</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#13032bda] text-white border-none">
                            <SelectValue placeholder={trnsAcc("account.select")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {

                            refaimag_city_ids.map((g: any, index: number) => <SelectItem className="hover:bg-gray-200" key={index} value={g._id}>{g.name}</SelectItem>)
                          }
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{trnsAcc("account.city")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={trnsAcc("account.city")}
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
                  onClick={(e: any) => onSubmit(e)}
                  type="submit"
                  className=" rounded-[32px] px-6 py-3 bg-[#4317FF] hover:bg-[#4317FF] text-white font-semibold"
                >
                  {trnsAcc("account.save")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
