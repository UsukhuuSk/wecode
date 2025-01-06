'use client'
import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { ReactLenis } from "@/lib/lenis"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import CommunityForm from "@/components/community/form";
import SafeHtmlContent from "@/components/SafeHtmlContent"

const ClassTrainingDetail = () => {
    const params = useParams<any>()
    const [detail, setDetail] = useState<any>(null)
    const refFrom = useRef<any>(null)
    useEffect(() => {
        getDetail()
    }, [])
    const getDetail = async () => {
        try {
            const data = await BaseApi._get(`9/service_classroom_courses/${params.id}`)
            setDetail(data)
        } catch (error) {
            Helper.handleError(error)
        }
    }
    const handleOpenForm = () => {
        refFrom.current.openForm('classroom_requests')
    }
    return (
        <ReactLenis root>
            <div className="pt-40 pb-20">
                <CommunityForm ref={refFrom} />
                <div className="bg-gray-100">
                    <div className="bg-main h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
                    <div className=" rounded-[2rem] md:px-16  py-16 container">
                        {/* {
                            detail && <div
                                className=" leading-normal text-start font-neue"
                                dangerouslySetInnerHTML={{
                                    __html: detail.html_content,
                                }}
                            />
                        } */}
                        {
                            detail && <SafeHtmlContent htmlContent={detail.html_content} />
                        }
                    </div>
                    {
                        detail && <div className="container flex justify-center">
                            <button onClick={handleOpenForm} className="px-4 py-2 transition-all rounded-[32px] bg-primary text-white border border-transparent hover:border-primary hover:bg-transparent hover:text-primary">Бүртгүүлэх</button>
                        </div>
                    }
                    <div className="bg-main h-20 w-full mt-20" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%' }}></div>
                </div>
            </div>
        </ReactLenis>
    )
}
export default ClassTrainingDetail