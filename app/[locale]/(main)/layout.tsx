'use client'
import { useEffect } from "react";
import Header from "../../../components/Header";
import NewFooter from "../../../components/NewFooter";
import { useAuth } from "../../../context/AuthContext";
import { useParams, useRouter } from "next/navigation";
import { FloatingHeader } from "../../../components/Nav";
import { LessonProvider } from "../../../context/LessonContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loaded }: any = useAuth()

  return (
    <LessonProvider>
      <div>
        {
         loaded && (user ? <Header /> : <FloatingHeader />)
        }
        {children}
        <NewFooter />
      </div>
    </LessonProvider>
  );
}
