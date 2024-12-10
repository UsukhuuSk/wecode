'use client'
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import { Invoice01Icon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PurchaseHistory() {
  const trns = useTranslations('profile')
  const [list, setList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      setLoading(true)
      // await BaseApi._get('-')
      await Helper.wait(1000)
      // setList(purchases)
    } catch (error) {
      Helper.handleError(error)
    } finally {
      setLoading(false)
    }
  }
  const purchases = [
    {
      id: 1,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
    {
      id: 2,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
    {
      id: 3,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
  ];
  function RenderLoading() {
    return (
      <div className="animate-pulse flex flex-col gap-2">
        {
          [1, 2, 3].map(item => {
            return (
              <div key={item} className="bg-wcSlate h-16 w-full rounded-md"> </div>
            )
          })
        }
      </div>
    )
  }

  function RenderEmpty() {
    return (
      <div className="py-6 flex flex-col justify-center items-center gap-5 border border-[#404047] rounded-3xl bg-[#13032b40]">
        {/* <Image alt={"logo"} height={40} width={40} src={BooksSvg} /> */}
        <p className="text-3xl">
          🛒
        </p>
        <p className="text-white text-sm md:text-2xl font-neue font-semibold">{trns('purchaseEmpty')}</p>
        {/* <p className="text-wcSlate400 font-neue font-normal text-sm w-[60%] text-center">{trns('purchaseEmpty')}</p> */}
      </div>
    )
  }

  function RenderList() {
    return (
      <div className="space-y-6">
        {list.map((purchase: any) => (
          <div
            key={purchase.id}
            className="flex flex-col md:flex-row  items-start md:items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <Invoice01Icon size={20} color={"#22C55E"} variant={"bulk"} />
              </div>
              <div>
                <h2 className="text-lg font-medium text-white">
                  {purchase.title}
                </h2>
                <p className="text-sm text-gray-400">{purchase.time}</p>
              </div>
            </div>
            <p className="text-lg font-medium text-emerald-500">
              {purchase.amount.toLocaleString()}₮
            </p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="w-full text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="mx-auto rounded-3xl flex flex-col gap-8 backdrop-blur-sm">
        <h1 className="text-[20px] font-adineue font-bold">{trns('purchaseHistory')}</h1>
        {
          loading && RenderLoading()
        }
        {
          !loading && Helper.isEmptyList(list) && RenderEmpty()
        }
        {
          !loading && Helper.isNotEmptyList(list) && RenderList()
        }
      </div>
    </div>
  );
}
