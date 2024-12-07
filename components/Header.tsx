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
  Profile02Icon
} from "@hugeicons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchImageFileById } from "../lib/imageUtils";
import LocaleSwitcher from "./LocaleSwitcher";
import { useAuth } from "../context/AuthContext";
import { NotifBar } from "./NotifBar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const { user } = useAuth()
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const locale = useLocale();
  const token = Cookies.get("authToken");
  const t = useTranslations("footer");
  const [userInfo, setUserInfo] = useState<any>({});
  const [imgUrl, setImgUrl] = useState<string | null | undefined>(null);
  const { logout } = useAuth()
  const trns = useTranslations("header")

  useEffect(() => {
    if (user && !user.is_agreement) {
      router.push(`/quiz`);
    }
  }, [user])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const param = { lang: locale };
        const payload = new URLSearchParams(Object.entries(param));

        const response = await fetch(
          `${BASEURL}/one/9/service_user_profile?${payload}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setUserInfo(data);

        if (data.image && data.image._id) {
          const imgUrl = await fetchImageFileById(data.image._id);
          setImgUrl(imgUrl);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    fetchUserInfo();
  }, []);
  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASEURL}/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to log out");
      }
      console.log("Logout request successful");
      logout()
      router.push(`/`);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handlePush = (link: string) => {
    router.push(link)
  }

  const routes = [
    {
      name: t("courses"),
      link: `/${locale}/course`,
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
      name: t("about"),
      link: `/${locale}/about`,
    },
  ];
  const MobileMenu = () => {
    return (
      <div className="fixed top-0 w-full flex z-[500] items-center px-4 py-4 md:hidden  bg-[#33415566] justify-between text-white cursor-pointer ">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={100} height={32} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <HamburgerMenuIcon width={24} height={24} />
          </SheetTrigger>
          <SheetContent className="bg-[#334155] z-[1000] w-[300px] border-gray-600 text-white">
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} alt="" />
                <LocaleSwitcher />
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col items-start justify-center gap-4">
                  {routes.map((route, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={route.link}
                          key={index}
                          className="font-neue text-[14px] font-medium px-3"
                        >
                          {route.name}
                        </Link>
                      </div>
                    );
                  })}
                  <div className="w-full border my-4"></div>
                  <div className="cursor-pointer w-full flex items-center gap-2 font-neue text-[14px] font-medium" onClick={() => handlePush('/profile')}>
                    <Profile02Icon
                      size={24}
                      color={"#fff"}
                      variant={"bulk"}
                    />
                    {trns('profile')}
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer w-full font-neue text-[14px] font-medium" onClick={() => handlePush('/settings/profile')}>
                    <PencilEdit01Icon
                      size={24}
                      color={"#fff"}
                      variant={"bulk"}
                    />
                    {trns('editProfile')}
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer w-full font-neue text-[14px] font-medium" onClick={() => handlePush('/settings/purchase-history')}>
                    <Invoice01Icon size={24} color={"#fff"} variant={"bulk"} />
                    {trns('purchaseHistory')}
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer w-full font-neue text-[14px] font-medium" onClick={() => handlePush('/settings/notification')}>
                    <Settings02Icon size={24} color={"#fff"} variant={"bulk"} />
                    {trns('notifSettings')}
                  </div>
                  <div
                    className="flex items-center gap-2  cursor-pointer w-full font-neue text-[14px] font-medium"
                    onClick={handleLogout}
                  >
                    <LogoutSquare01Icon
                      size={20}
                      color={"#fff"}
                      variant={"solid"}
                    />
                    {trns('signout')}
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>

            {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  const MainMenu = () => {
    return (
      <div className="hidden  md:block fixed top-0 z-10 w-full py-3 text-white bg-[#33415566] border-b border-[#40404787]">
        <div className="container flex  justify-between">
          <Link href={'/'}>
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
                      className="font-neue text-[14px] font-medium px-3"
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
                    <div className="h-8 w-8 rounded-full border border-neutral-700 p-0 relative object-cover">
                      <Image
                        src={imgUrl || ""}
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                      <ChevronDownIcon className="h-4 w-4 text-white absolute -right-5 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-[110px] bg-[#1a1a40] border-neutral-700 text-white flex flex-col items-start">
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush('/profile')}>
                      <Profile02Icon
                        size={24}
                        color={"#fff"}
                        variant={"bulk"}
                      />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush('/settings/profile')}>
                      <PencilEdit01Icon
                        size={24}
                        color={"#fff"}
                        variant={"bulk"}
                      />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush('/settings/purchase-history')}>
                      <Invoice01Icon size={24} color={"#fff"} variant={"bulk"} />
                      Purchase history
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush('/settings/notification')}>
                      <Settings02Icon size={24} color={"#fff"} variant={"bulk"} />
                      Notification settings
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
                      Sign out
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
