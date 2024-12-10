"use client";
import React, { createContext, useState, ReactNode } from "react";

interface FormValues {
  country_id: string;
  given_name?: string;
  surname?: string;
  gender_id?: string;
  work_id?: string;
  age_id?: string;
  address?: string;
  city_name?: string;
  aimag_city_id?: string;
  education_id?: string;
  is_agreement?: boolean;
  purposes?: string[];
  background?: Object;
  industry?: Object;
  computerScience: Object;
}

interface FormContextProps {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export const FormContext = createContext<FormContextProps | null>(null);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    country_id: '',
    given_name: '',
    surname: '',
    gender_id: '',
    work_id: '',
    age_id: '',
    address: '',
    city_name: '',
    aimag_city_id: '',
    education_id: '',
    is_agreement: false,
    purposes: [],
    background: '',
    industry: '',
    computerScience: ''

  });

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
