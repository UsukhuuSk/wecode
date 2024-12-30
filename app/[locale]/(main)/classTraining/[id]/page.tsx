'use client'
import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { ReactLenis } from "@/lib/lenis"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const ClassTrainingDetail = () => {
    const params = useParams<any>()
    const [detail, setDetail] = useState<any>(null)
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
    return (
        <ReactLenis root>
            <div className="pt-40 pb-20">
                <div className="bg-gray-100">
                    <div className="bg-main h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
                    <div className=" rounded-[2rem] md:px-16  py-16 container">
                        {
                            detail && <div
                                className=" leading-normal text-start font-neue"
                                dangerouslySetInnerHTML={{
                                    __html: detail.html_content,
                                }}
                            />
                        }
                    </div>
                    <div className="bg-main h-20 w-full mt-20" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%' }}></div>
                </div>
            </div>
        </ReactLenis>
    )
}
export default ClassTrainingDetail