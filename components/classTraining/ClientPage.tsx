'use client'
import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { ReactLenis } from "@/lib/lenis"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import CommunityForm from "@/components/community/form";
import SafeHtmlContent from "@/components/SafeHtmlContent"
import { GetFileUrl } from "@/lib/utils"
import Image from "next/image"
import { useLocale } from "next-intl"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { FaArrowAltCircleLeft, FaArrowCircleLeft } from "react-icons/fa"
import { ArrowLeft01Icon, CircleArrowLeft01Icon } from "@hugeicons/react"
const ClientPageClassTraining = ({ detail }: any) => {
    const params = useParams<any>()
    const refFrom = useRef<any>(null)
    const locale = useLocale()
    const router = useRouter()

    useEffect(() => {
        getDetail()
    }, [])
    const getDetail = async () => {
        try {
            const data = await BaseApi._get(`9/service_classroom_courses/${params.id}`)
        } catch (error) {
            Helper.handleError(error)
        }
    }
    const handleOpenForm = () => {
        refFrom.current.openForm('classroom_requests')
    }
    return (
        <ReactLenis root>
            <div className="pt-32 pb-20">
                <CommunityForm ref={refFrom} />
                <div className="container text-gray-50 flex justify-between items-center">
                    <button className="" onClick={() => router.back()}>
                        <CircleArrowLeft01Icon size={'2rem'} />
                    </button>
                    <p className="font-semibold text-2xl">{detail?.name}</p>
                    <span></span>
                </div>
                <div className="bg-gray-100">
                    <div className="bg-main h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>

                    <div className=" rounded-[2rem] md:px-16  py-16 container">

                        {
                            detail && <SafeHtmlContent htmlContent={detail.html_content} />
                        }
                    </div>
                    <div className="container flex flex-col gap-4 pb-4">
                        <h1 className="text-center">{locale === 'mn' ? 'Багш нар' : 'Teachers'}</h1>
                        <div className="grid grid-cols-4 gap-4">
                            {detail?.teachers.map((t: any, index: any) => {
                                return <div className="flex justify-center group" key={index}>
                                    <div className="py-2 rounded-[2rem]  inline-flex gap-2 items-center">
                                        <Image className="rounded-md group-hover:scale-110 transition-all duration-1000" height={50} width={50} alt={t.full_name} src={GetFileUrl(t.image)} />
                                        <div>
                                            <Link href={t.link_linkedin} className="font-semibold " target="_blank">
                                                <span>{t.full_name}</span>
                                            </Link>
                                            {
                                                t.link_linkedin && <Link href={t.link_linkedin} className="font-medium text-primary mt-4" target="_blank">
                                                    <LinkedInLogoIcon fontSize={'2rem'} />
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
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
export default ClientPageClassTraining