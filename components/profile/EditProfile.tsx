"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Camera01Icon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { SymbolIcon } from "@radix-ui/react-icons";
import { BaseApi } from "../../api/baseApi";
import { useAuth } from "../../context/AuthContext";
import { Helper } from "../../lib/helper";
import { GetFileUrl } from "../../lib/utils";
import { CoFormField } from "./CoFormField";
import { CoSelect } from "../ui/CoSelect";
const fetchAndSetData = async (endpoint: any, setter: any) => {
  try {
    const { list } = await BaseApi._get(endpoint);
    setter(list);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
  }
};


export default function EditProfile() {
  const { user, login } = useAuth()
  const trns = useTranslations('profile')
  const trnsAcc = useTranslations("quiz");
  const [userData, setUserData] = useState<any>({});
  const [genders, setGenders] = useState<any>([])
  const [refEmp, setRefEmp] = useState<any>([])
  const [refAges, setRefAges] = useState<any>([])
  const [refCountries, setRefCountries] = useState<any>([])
  const [refEdus, setRefEdus] = useState<any>([])
  const [errors, setErrors] = useState<any>([])


  const [saving, setSaving] = useState<boolean>(false)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      const tempData = { ...user }
      setUserData(
        {
          given_name: tempData.given_name || "",
          address: tempData.address || "",
          surname: tempData.surname || "",
          gender_id: tempData.gender_id ? tempData.gender_id._id : "",
          country_id: tempData.country_id ? tempData.country_id._id : "",
          city_name: tempData.city_name || "",
          work_id: tempData.work_id ? tempData.work_id._id : "",
          education_id: tempData.education_id ? tempData.education_id._id : "",
          age_id: tempData.age_id ? tempData.age_id._id : "",
        }
      )
    }
  }, [user])


  const fetchData = async () => {
    await Promise.all([
      fetchAndSetData('9/ref_genders', setGenders),
      fetchAndSetData('9/ref_works', setRefEmp),
      fetchAndSetData('9/ref_ages', setRefAges),
      fetchAndSetData('9/ref_countries', setRefCountries),
      fetchAndSetData('9/ref_educations', setRefEdus),
    ]);
  };


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    updateImage(file)
  };

  const updateImage = async (file: any) => {
    try {
      const data = await BaseApi._post('file/upload', file)
      await BaseApi._post('/9/service_user_profile', { _id: user._id, image: data._id })
      Helper.handleSuccess('Image changed.')
      login()
    } catch (error) {
      Helper.handleError(error)
    }
  }


  async function handleSave() {
    try {

      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          if (!userData[key]) {
            setErrors((prev: any[]) => [...prev, key]);

          }
        }
      }
      // if (errors.length > 0) return;

      setSaving(true)
      await BaseApi._post('/9/service_user_profile', { _id: user._id, email: user.email, ...userData })
      await Helper.wait();
      Helper.handleSuccess(trns('updateSuccess'))
      login()
    } catch (error) {
      Helper.handleError(error);
    } finally {
      setSaving(false)
    }
  }

  const handleChangeUserData = (field: string, value: any) => {
    setUserData((prev: any) => {
      const newData = { ...prev, [field]: value };
      return newData;
    });
  };


  return (
    <div className="w-full  text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="flex flex-col gap-8">
        <h1 className="text-[20px] font-adineue font-bold text-center md:text-left">{trns('profileSettings')}</h1>
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
                className="relative flex items-center justify-center cursor-pointer w-[100px] h-[100px] rounded-full overflow-hidden bg-[#fff]"
              >
                <img src={GetFileUrl(user?.image._id)} alt="" />
                <div className="absolute bottom-[10%] translate-x-1/2 right-1/2 bg-[#13032B] rounded-full p-1 z-[150]">
                  <Camera01Icon color="#fff" size={20} variant="solid" />
                </div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField key="firstname" label={'account.firstName'} isError={errors.includes('given_name')}>
                <input
                  className="h-11 bg-[#13032B80] border border-[#484261] rounded-xl px-4  text-white w-full"
                  value={userData['given_name'] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeUserData('given_name', e.target.value)
                  }
                />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField label={'account.lastName'} isError={errors.includes('surname')}>
                <input className="h-11 bg-[#13032B80] border border-[#484261] rounded-xl px-4   text-white w-full" value={userData['surname']} onChange={(e: any) => handleChangeUserData('surname', e.target.value)} />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField label={'account.gender'} isError={errors.includes('gender_id')}>
                <CoSelect placeholder={trnsAcc('account.select')} value={userData['gender_id']} onChange={(value) => handleChangeUserData('gender_id', value)} items={genders.map((e: any) => { return { label: e.name, value: e._id } })} />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField label={'account.employment'} isError={errors.includes('work_id')}>
                <CoSelect placeholder={trnsAcc('account.select')} value={userData['work_id']} onChange={(value) => handleChangeUserData('work_id', value)} items={refEmp.map((e: any) => { return { label: e.name, value: e._id } })} />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField label={'account.education'} isError={errors.includes('education_id')}>
                <CoSelect placeholder={trnsAcc('account.select')} value={userData['education_id']} onChange={(value) => handleChangeUserData('education_id', value)} items={refEdus.map((e: any) => { return { label: e.name, value: e._id } })} />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <CoFormField label={'account.age'} isError={errors.includes('age_id')}>
                <CoSelect placeholder={trnsAcc('account.select')} value={userData['age_id']} onChange={(value) => handleChangeUserData('age_id', value)} items={refAges.map((e: any) => { return { label: e.name, value: e._id } })} />
              </CoFormField>
            </div>

            <div  className="col-span-12 md:col-span-6 lg:col-span-3">
              <CoFormField label={'account.region'} isError={errors.includes('country_id')}>
                <CoSelect placeholder={trnsAcc('account.select')} value={userData['country_id']} onChange={(value) => handleChangeUserData('country_id', value)} items={refCountries.map((e: any) => { return { label: e.name, value: e._id } })} />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <CoFormField label={'account.city'} isError={errors.includes('city_name')}>
                <input
                  className="h-11 bg-[#13032B80] border border-[#484261] rounded-xl px-4  text-white w-full"
                  value={userData['city_name'] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeUserData('city_name', e.target.value)
                  }
                />
              </CoFormField>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <CoFormField label={'account.address'} isError={errors.includes('address')}>
                <input
                  className="h-11 bg-[#13032B80] border border-[#484261] rounded-xl px-4  text-white w-full"
                  value={userData['address'] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeUserData('address', e.target.value)
                  }
                />
              </CoFormField>
            </div>
            <div className="col-span-12 flex justify-end">
              <button
                onClick={handleSave}
                type="submit"
                disabled={saving}
                className={` disabled:opacity-50 disabled:cursor-not-allowed rounded-[32px] px-6 py-3 bg-primary text-white font-semibold flex items-center gap-2`}
              >
                {saving && <SymbolIcon className="animate-spin" />}
                {saving ? trnsAcc("account.saving") : trnsAcc("account.save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
