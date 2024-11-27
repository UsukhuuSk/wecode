import { FormProvider } from "../../../../context/FormContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FormProvider>{children}</FormProvider>;
}
