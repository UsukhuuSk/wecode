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
  Cancel01Icon
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

export default function Header() {
  const { user } = useAuth()
  const BASEURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const path = usePathname()
  const locale = useLocale();
  const t = useTranslations("footer");
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false)

  const { logout } = useAuth()
  const trns = useTranslations("header")

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
          <div className="w-full mt-16 flex flex-col gap-[10px]">
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
      </div>
    )
  }


  // const MobileMenu = () => {
  //   return (
  //     <div className="fixed top-0 w-full flex z-[500] items-center px-4 py-4 md:hidden  bg-[#33415566] justify-between text-white cursor-pointer ">
  //       <Link href={'/'}>
  //         <Image src={logo} alt="logo" width={100} height={32} />
  //       </Link>
  //       <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
  //         <SheetTrigger asChild>
  //           <button onClick={() => {
  //             setSheetOpen(true)
  //           }}>
  //             <HamburgerMenuIcon width={24} height={24} />
  //           </button>
  //         </SheetTrigger>
  //         <SheetContent className="bg-[#334155] z-[1000] w-[300px] border-gray-600 text-white">
  //           <SheetHeader>
  //             <SheetTitle>
  //               <Image src={logo} alt="" />
  //               <LocaleSwitcher />
  //             </SheetTitle>
  //             <SheetDescription>
  //               <div className="flex flex-col items-start justify-center gap-4">
  //                 {routes.map((route, index) => {
  //                   return (
  //                     <div key={index}>
  //                       <Link
  //                         href={route.link}
  //                         key={index}
  //                         className="font-neue text-[14px] font-medium px-3"
  //                         onClick={sheetClose}
  //                       >
  //                         {route.name}
  //                       </Link>
  //                     </div>
  //                   );
  //                 })}
  //                 <div className="w-full border my-4"></div>
  //                 <div className="cursor-pointer w-full flex items-center gap-2 font-neue text-[14px] font-medium" onClick={() => {
  //                   handlePush('/profile')
  //                   sheetClose()
  //                 }}>
  //                   <Profile02Icon
  //                     size={24}
  //                     color={"#fff"}
  //                     variant={"bulk"}
  //                   />
  //                   {trns('profile')}
  //                 </div>
  //                 <div className="flex items-center gap-2 cursor-pointer w-full font-neue text-[14px] font-medium" onClick={() => {
  //                   handlePush('/settings/profile')
  //                   sheetClose()
  //                 }}>
  //                   <PencilEdit01Icon
  //                     size={24}
  //                     color={"#fff"}
  //                     variant={"bulk"}
  //                   />
  //                   {trns('editProfile')}
  //                 </div>

  //                 <div
  //                   className="flex items-center gap-2  cursor-pointer w-full font-neue text-[14px] font-medium"
  //                   onClick={() => {
  //                     handleLogout()
  //                     sheetClose()
  //                   }}
  //                 >
  //                   <LogoutSquare01Icon
  //                     size={20}
  //                     color={"#fff"}
  //                     variant={"solid"}
  //                   />
  //                   {trns('signout')}
  //                 </div>
  //               </div>
  //             </SheetDescription>
  //           </SheetHeader>

  //           {/* <SheetFooter>
  //           <SheetClose asChild>
  //             <Button type="submit">Save changes</Button>
  //           </SheetClose>
  //         </SheetFooter> */}
  //         </SheetContent>
  //       </Sheet>
  //     </div>
  //   )
  // }

  const MainMenu = () => {
    return (
      <div className="hidden md:block fixed top-0 z-10 w-full py-3 text-white bg-[#33415566] backdrop-blur-sm border-b border-[#40404787]">
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
                      className={`${isActiveMenu(route.link) ? 'bg-white text-primary' : ''} hover:bg-[#FFFFFF20] hover:opacity-90 font-neue text-sm font-medium px-3 py-2 rounded-[2rem]`}
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
                      <Image
                        src={GetFileUrl(user.image._id)}
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
                      {trns('profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-3 py-3 focus:bg-white/10 cursor-pointer w-full" onClick={() => handlePush('/settings/profile')}>
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
