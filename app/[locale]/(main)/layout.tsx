'use client'
import { useEffect } from "react";
import Header from "../../../components/Header";
import NewFooter from "../../../components/NewFooter";
import { useAuth } from "../../../context/AuthContext";
import { useParams, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams<any>()
  const { user }: any = useAuth()
  const router = useRouter()
  useEffect(() => {
    console.log('-------user--------', user)
    if(user && !user.is_agreement) {
      router.push(`/${params.locale}/quiz`);
    }
  }, [user])
  return (
    <div>
      <Header />
      {children}
      <NewFooter />
    </div>
  );
}
