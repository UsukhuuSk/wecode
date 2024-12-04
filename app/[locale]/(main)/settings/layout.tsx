'use client'
import { Invoice01Icon } from "@hugeicons/react";
import Link from "next/link";
import settings from "../../../../assets/settings.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const trns = useTranslations('profile')
  const pathName = usePathname()

  const routes = [{
    name:  trns('profile'),
    link: '/settings/profile'
  }, {
    name: trns('notification'),
    link: '/settings/notification'
  }, {
    name: trns('purchaseHistory'),
    link: '/settings/purchase-history'
  }]

  const isActive = (link: any) => {
    return pathName.includes(link)
  }

  return (
    <div className="min-h-screen container py-[100px] overflow-hidden">
      <div className="w-[800px] h-[800px] rotate-[92] flex-shrink-0 rounded-full bg-[#4317ff] blur-[360px] -z-50 absolute right-0 top-1/4"></div>
      <div className="flex items-start gap-[10px] pt-4 pb-8 border-b border-slate-700">
        <Image src={settings} alt="" />
        <h1 className="text-white text-[36px] font-bold font-adineue">
          {trns('settings')}
        </h1>
      </div>
      <div className="max-w-[1024px] mt-10 flex gap-8 overflow-hidden">
        <div className="max-w-[210px] min-w-[210px]">
          <div className="flex flex-col gap-2">
            {
              routes.map((r: any) => (
                <Link
                  key={r.name}
                  href={r.link}
                  className={`flex items-center px-4 py-4 gap-2 rounded-xl ${isActive(r.link) ? 'bg-[#4317FF]' : ''}`}
                >
                  <span className="">
                    <Invoice01Icon size={18} color={"#fff"} variant={"bulk"} />
                  </span>
                  <span className="text-white font-normal text-sm font-neue">
                    {r.name}
                  </span>
                </Link>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}