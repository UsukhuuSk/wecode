"use client";
import Image from "next/image";
import logo from "../assets/userlogo.svg";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  Invoice01Icon,
  LogoutSquare01Icon,
  Notification03Icon,
  PencilEdit01Icon,
  Settings02Icon,
  Profile02Icon,
  Cancel01Icon,
  Settings01Icon,
  SquareArrowRight02Icon
} from "@hugeicons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchImageFileById } from "../lib/imageUtils";
import LocaleSwitcher from "./LocaleSwitcher";
import { useAuth } from "../context/AuthContext";
import { NotifBar } from "./NotifBar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { GetFileUrl } from "@/lib/utils";
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";

export default function Header() {
  const trns = useTranslations("header")
  const trnsp = useTranslations('profile')

  const t = useTranslations("footer");

  const { logout } = useAuth()
  const { user } = useAuth()
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const path = usePathname()
  const locale = useLocale();
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false)
  const [learningCnt, setLearninCnt] = useState(0)
  const [passedCnt, setPassedCnt] = useState(0)
  useEffect(() => {
    getCounts()
  }, [])
  const getCounts = async () => {
    try {
      const { learning_count, passed_count } = await BaseApi._get('/exam/count/courses')
      setLearninCnt(learning_count)
      setPassedCnt(passed_count)
    } catch (error) {
      Helper.handleError(error)
    }
  }



  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASEURL}/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to log out");
      }
      logout()
      router.push(`/`);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleSettings = () => {
    setSheetOpen(false)
    router.push('/settings/profile')
  }

  const handlePush = (link: string) => {
    setSheetOpen(false)
    router.push(link)
  }

  const routes = [
    {
      name: t("courses"),
      link: `/${locale}/course`,
    },
    {
      name: t("classTraining"),
      link: `/${locale}/classTraining`,
    },
    {
      name: t("campaign"),
      link: `/${locale}/campaign`,
    },
    {
      name: t("blog"),
      link: `/${locale}/blog`,
    },
    {
      name: t("community"),
      link: `/${locale}/community`,
    },
    {
      name: t("profile"),
      link: `/${locale}/profile`,
    },
  ];

  const isActiveMenu = (route: any) => {
    return path.startsWith(route)
  }

  const sheetClose = () => setSheetOpen(false)
  const MobileMenu = () => {
    return (
      <div className={`fixed top-0 w-full backdrop-blur-sm  ${isSheetOpen ? 'h-[100vh] bg-[#13032BEB]  ' : 'bg-[#33415566]'}  z-[500] px-4 py-4 md:hidden   text-white cursor-pointer `}>
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={100} height={32} />
          </Link>
          <button onClick={() => {
            setSheetOpen((prev: boolean) => !prev)
          }}>
            {
              isSheetOpen ? <Cancel01Icon stroke="8px" width={32} height={32} /> :
                <HamburgerMenuIcon width={32} height={32} />
            }
          </button>
        </div>
        {
          isSheetOpen &&
          <div className="w-full mt-16 flex flex-col gap-[5px]">
            {routes.map((route, index) => {
              return (
                <div className={`text-center h-10 rounded-[32px] ${isActiveMenu(route.link) ? 'bg-[#FFFFFF33]' : ''}`} key={index}>
                  <Link
                    href={route.link}
                    key={index}
                    className="font-neue text-[24px] font-medium text-center"
                    onClick={sheetClose}
                  >
                    {route.name}
                  </Link>
                </div>
              );
            })}
          </div>
        }
        {
          isSheetOpen &&
          <div className="absolute bottom-28 h-16 px-4 flex w-11/12 m-auto items-center gap-2 justify-between rounded-xl bg-[rgba(51, 65, 85, 0.2)] border border-neutral-700">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border border-neutral-700 p-0 relative object-cover cursor-pointer">
                { user.image?._id && <Image
                  src={GetFileUrl(user.image._id)}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />}
              </div>
              <div>
                {user.given_name}
                <div className="flex justify-center gap-2">
                  <div className="text-slate-400 font-normal text-[14px] font-neue lowercase">
                    {learningCnt} {trnsp('enrolled')}
                  </div>
                  <div className="text-slate-400 font-normal text-[14px] font-neue lowercase">
                    {passedCnt} {trnsp('completed')}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleSettings}>
                <Settings01Icon variant="bulk" className="text-xl" />
              </button>
              <button onClick={handleLogout}>
                <SquareArrowRight02Icon variant="bulk" className="text-red-500 text-xl" />
              </button>
            </div>
          </div>
        }
      </div>
    )
  }

  const MainMenu = () => {
    return (
      <div className="hidden md:block fixed top-0 z-10 w-full py-3 text-white bg-[#33415566] backdrop-blur-sm border-b border-[#40404787]">
        <div className="container flex  justify-between">
          <Link href={`/${locale}`}>
            <Image src={logo} alt="logo" width={100} height={32} />
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {routes.map((route, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={route.link}
                      key={index}
                      className={`${isActiveMenu(route.link) ? 'bg-white text-primary' : ''}  hover:opacity-90 font-neue text-sm font-medium px-3 py-2 rounded-[2rem]`}
                    >
                      {route.name}
                    </Link>
                  </div>
                );
              })}
              <div className="flex items-center gap-4">
                <LocaleSwitcher />
                <NotifBar />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="h-8 w-8 rounded-full border border-neutral-700 p-0 relative object-cover cursor-pointer">
                      {user.image?._id && <Image
                        src={GetFileUrl(user.image._id)}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />}
                      <ChevronDownIcon className="h-4 w-4 text-white absolute -right-5 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-[110px] bg-[#1a1a40] border-neutral-700 text-white flex flex-col items-start">
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush(`/${locale}/profile`)}>
                      <Profile02Icon
                        size={24}
                        color={"#fff"}
                        variant={"bulk"}
                      />
                      {trns('profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush(`/${locale}/settings/profile`)}>
                      <PencilEdit01Icon
                        size={24}
                        color={"#fff"}
                        variant={"bulk"}
                      />
                      {trns('editProfile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="gap-3  focus:bg-white/10 cursor-pointer w-full"
                      onClick={handleLogout}
                    >
                      <LogoutSquare01Icon
                        size={20}
                        color={"#fff"}
                        variant={"solid"}
                      />
                      {trns('signout')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {MainMenu()}
      {MobileMenu()}
    </>
  );
}
