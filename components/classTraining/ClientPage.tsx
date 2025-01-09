'use client'
import { BaseApi } from "@/api/baseApi"
import { Helper } from "@/lib/helper"
import { ReactLenis } from "@/lib/lenis"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import CommunityForm from "@/components/community/form";
import SafeHtmlContent from "@/components/SafeHtmlContent"
import { GetFileUrl } from "@/lib/utils"
import Image from "next/image"
import { useLocale } from "next-intl"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { CircleArrowLeft01Icon, Rocket01Icon } from "@hugeicons/react"
import { useClassTraining } from "@/context/ClassTrainingContext"
import RegBanner from "@/assets/regBanner.jpg"
const ClientPageClassTraining = ({ detail }: any) => {
    const { courseList } = useClassTraining()
    const pathname = usePathname()
    const refFrom = useRef<any>(null)
    const locale = useLocale()
    const router = useRouter()

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
                    <p className="font-semibold text-2xl max-w-[70%]">{detail?.name}</p>
                    <span></span>
                </div>
                <div className="bg-gray-100">
                    <div className="bg-main h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
                    <div className=" container  md:px-16  py-16 grid grid-cols-12 gap-8">
                        <div className=" col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
                            <div className="bg-gray-200 p-10 rounded-3xl flex flex-col gap-6 ">
                                {
                                    courseList.map((c: any, index: any) => (
                                        <Link className="group relative flex" href={`/${locale}/classTraining/${c._id}`} key={index}>
                                            <Rocket01Icon className="group-hover:block hidden absolute left-[-2rem] top-[50%] translate-y-[-50%] transition-all" />
                                            <div className={`text-sm md:text-base font-semibold text-gray-500 hover:text-gray-900 transition-all font-neue ${pathname === `/${locale}/classTraining/${c._id}` ? 'text-blue-500 underline' : ''}`}>
                                                {c.name}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className=" rounded-3xl relative h-56 md:h-80 overflow-hidden">
                                <Image className="h-56 md:h-80 object-cover" alt="reg" width={0} height={0} src={RegBanner} />
                                <div className="z-10 absolute top-[50%] translate-y-[-50%] flex flex-col gap-4 items-center justify-center">
                                    <p className="text-white text-lg md:text-2xl text-center font-neue ">{detail?.name}</p>
                                    <button onClick={handleOpenForm} className="group relative text-white border border-white h-12 w-32 hover:w-36 rounded-[2rem] flex items-center hover:bg-primary hover:border-primary transition-all">
                                        <Rocket01Icon className="hidden group-hover:inline transition-all ml-2" />
                                        <span className="absolute left-5 group-hover:left-10 transition-all font-semibold font-neue">{locale === 'en' ? 'Register' : 'Бүртгүүлэх'}</span>
                                    </button>
                                </div>

                            </div>
                            <div className=" rounded-3xl relative overflow-hidden p-6 bg-gray-200 flex flex-col">
                                <h1 className="text-center text-gray-800">{locale === 'mn' ? 'Багш нар' : 'Teachers'}</h1>

                                {detail?.teachers.map((t: any, index: any) => {
                                    return <div className="flex group" key={index}>
                                        <div className="py-2 rounded-[2rem]  inline-flex gap-2 items-center">
                                            <Image className="rounded-md group-hover:scale-110 transition-all duration-1000" height={50} width={50} alt={t.full_name} src={GetFileUrl(t.image)} />
                                            <div>
                                                {
                                                    t.link_linkedin &&
                                                    <Link href={t.link_linkedin} className="font-semibold " target="_blank">
                                                        <span className="text-gray-800">{t.full_name}</span>
                                                    </Link>
                                                }
                                                {
                                                    t.link_linkedin && <Link href={t.link_linkedin} className="font-medium text-gray-500 mt-4" target="_blank">
                                                        <LinkedInLogoIcon fontSize={'2rem'} />
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>
                        </div>
                        <div className=" rounded-[2rem]  col-span-12 lg:col-span-8 xl:col-span-9">

                            {
                                detail && <SafeHtmlContent htmlContent={detail.html_content} />
                            }
                        </div>
                    </div>


                    <div className="bg-main h-20 w-full mt-20" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%' }}></div>
                </div>
            </div>
        </ReactLenis >
    )
}
export default ClientPageClassTraining