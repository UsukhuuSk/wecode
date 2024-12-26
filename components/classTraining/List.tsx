
'use client'
import { Helper } from "@/lib/helper";
import { getMaxListeners } from "events";
import { useTranslations } from "next-intl";
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
            for (let i = 0; i < 7; i++) {
                a.push({
                    "title": "Танхимын сургалт " + i,
                    "duration": "Үргэлжлэх хугацаа " + i,
                    "totalHours": "Сургалтын нийт цаг " + i,
                    "schedule": "Хичээлийн хуваарь " + i,
                    "dailyDuration": "Өдөрт хичээллэх цаг " + i,
                    "capacity": "Анги дүүргэлт " + i,
                    "fee": "Сургалтын төлбөр " + i,
                    "methodology": "Сургалтын арга зүй " + i,
                    "learninMethod": "Суралцахуйн аргачлал " + i,
                    "overview": "Сургалтын хөтөлбөрийн тойм " + i,
                    "capstone": "Capstone төслүүд " + i,
                    "result": "Хүлээгдэж буй үр дүн  + i"
                })
            }
            setList(a)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                list.map((item: any, index: number) => (
                    <div key={index} className="relative bg-center bg-contain bg-no-repeat text-white h-80 border border-neutral-600 rounded-2xl p-1 overflow-hidden" style={{ backgroundImage: 'url(https://ai-academy.asia/api/file/thumbnail/1718)' }}>
                        <div className=" top-4 h-10 bg-[#000000a6] text-lg font-semibold rounded-t-lg rounded-b-md flex items-center px-4"> Хэрэглээний AI инженерчлэл
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassTrainingList;