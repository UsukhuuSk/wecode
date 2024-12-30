
'use client'
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import { GetFileUrl } from "@/lib/utils";
import { getMaxListeners } from "events";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const ClassTrainingList = () => {
    const [list, setList] = useState<any>([])
    const trns = useTranslations("classTraining")
    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        try {
            const a = []
            const data = await BaseApi._get('9/service_classroom_courses')
            setList(data.list)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                list.map((item: any, index: number) => (
                    <Link  key={index} href={`/classTraining/${item._id}`}>
                        <div key={index} className="relative bg-center bg-contain bg-no-repeat text-white h-80 border border-neutral-600 rounded-2xl p-1 overflow-hidden"
                            style={{ backgroundImage: `url(${GetFileUrl(item?.image?._id)})` }}>
                            <div className=" top-4 h-10 bg-[#000000a6] text-lg font-semibold rounded-t-lg rounded-b-md flex items-center px-4">
                                {item.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ClassTrainingList;