
'use client'
import { BaseApi } from "@/api/baseApi";
import { Helper } from "@/lib/helper";
import { GetFileUrl } from "@/lib/utils";
import { getMaxListeners } from "events";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import empAi from "@/assets/course/ai.png"
import Image from "next/image";

const ClassTrainingList = () => {
    const [list, setList] = useState<any>([])
    const trns = useTranslations("classTraining")
    const locale = useLocale()
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                list.map((item: any, index: number) => (
                    <Link className={`${index == 0 ? 'row-span-2' : (index === 1 ? 'row-span-2' : 'row-span-1')} ${index === list.length - 1 ? 'col-span-3' : ''}`} key={index} href={`/${locale}/classTraining/${item._id}`}>
                        <div key={index} className="group relative flex flex-col items-center justify-center bg-center bg-contain bg-no-repeat border-neutral-600 hover:border-primary text-white h-full min-h-80 border  rounded-2xl overflow-hidden"
                        >
                            {
                                item.image ? <Image width={0}
                                    height={0} alt="free" className="w-full h-full min-h-80 absolute object-cover select-none" src={GetFileUrl(item.image._id)} /> : <Image width={0}
                                        height={0} alt="free" className="w-full h-full min-h-80 absolute object-cover select-none" src={empAi} />
                            }
                            <div className="group-hover:scale-110 text-center transition-all duration-300 z-10 top-4 min-h-10 text-xl font-semibold rounded-t-lg rounded-b-md flex items-center p-4 rounded-[2rem] max-w-[90%]">
                                {item.name}
                            </div>
                            <div className="group-hover:translate-y-2 z-10 text-center transition-all duration-300">
                                {item.description.slice(0, 50)}...
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ClassTrainingList;