"use client";
import { useEffect } from "react";
import Intro from "../../components/Introo/Intro";
import Lenis from "lenis";
import { FloatingNavDemo } from "../../components/Nav";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import { usersList } from "../../api/serviceuser";

const NonCriticalComponent = dynamic(() => import("../../components/Unique"), {
  ssr: false,
});
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const param = { pageSize: 10, offset: 0, lang: "mn" };
    const params = new URLSearchParams(Object.entries<any>(param));
    console.log(params.toString());
    const users = await usersList({ params });
    console.log(users);
    return users;
  };

  return (
    <main>
      <FloatingNavDemo />
      <Intro />
      <NonCriticalComponent />
    </main>
  );
}
