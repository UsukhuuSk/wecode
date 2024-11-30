'use client'

import Header from "../../../components/Header";
import { FloatingHeader } from "../../../components/Nav";
import { useAuth } from "../../../context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth()
  return (
    <div>
      <div className="">
      {
        user ? <Header /> : <FloatingHeader />
      }
      </div>
      {children}
    </div>
  );
}
