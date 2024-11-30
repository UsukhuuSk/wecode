"use client";
import React, { createContext, useState, ReactNode } from "react";

interface FormValues {
  given_name?: string;
  surname?: string;
  gender_id?: string;
  work_id?: string;
  age?: string;
  address?: string;
  city?: string;
  aimag_city_id?: string;
  education_id?: string;
  is_agreement?: boolean;
  purposes?: string[];
  background?: Object;
  industry?: Object;
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
  const [formValues, setFormValues] = useState<FormValues>({});

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
