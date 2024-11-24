"use client";
import React, { createContext, useState, ReactNode } from "react";

interface FormValues {
  firstName?: string;
  lastName?: string;
  gender?: string;
  employmentStatus?: string;
  age?: string;
  address?: string;
  city?: string;
  region?: string;
  educationLevel?: string;
  acceptTerms?: boolean;
  purposes?: string[];
  work_id?: Object;
  background?: Object;
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
