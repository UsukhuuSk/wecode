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
import { useAuth } from "@/context/AuthContext"
const ClientPageClassTraining = ({ detail }: any) => {
    const refFrom = useRef<any>(null)
    const params = useParams()
    const locale = useLocale()
    const router = useRouter()
    const [staticData, setStaticData] = useState<any>([])
    const { user } = useAuth()
    useEffect(() => {
        if (user) {
            setStaticSetters()
        } else {
            setStaticData([
                { field: 'classroom_course_id', value: params.id },
            ])
        }
    }, [user])

    const setStaticSetters = () => {
        const { given_name, surname, phone_num, email } = user
        setStaticData([
            { field: 'name', value: given_name },
            { field: 'email', value: email },
            { field: 'phone_num', value: phone_num },
            { field: 'classroom_course_id', value: params.id }

        ])
    }

    const handleOpenForm = () => {
        refFrom.current.openForm('classroom_requests')
    }
    return (
        <ReactLenis root>
            <div className="pt-32 pb-20">
                <CommunityForm ref={refFrom} staticData={staticData} />
                <div className="container text-gray-50 flex justify-between items-center">
                    <button className="" onClick={() => router.back()}>
                        <CircleArrowLeft01Icon size={'2rem'} />
                    </button>
                    {/* <p className="font-semibold text-2xl max-w-[70%]">{detail?.name}</p> */}
                    <span></span>
                </div>
                <div className="bg-gray-100">
                    <div className="bg-main h-20 w-full" style={{ borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
                    <div className=" container py-10">
                        <div className="mx-20 flex flex-col gap-10">
                            <div className=" rounded-[2rem]">
                                <p className="font-semibold text-3xl text-center">{detail?.name}</p>
                                {
                                    detail && <SafeHtmlContent htmlContent={detail.html_content} />
                                }
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className=" rounded-3xl relative overflow-hidden p-6 bg-gray-200 flex flex-col">
                                    <h1 className="text-center text-gray-800">{locale === 'mn' ? 'Багш нар' : 'Teachers'}</h1>
                                    <div className="flex justify-center">
                                        {detail?.teachers.map((t: any, index: any) => {
                                            return <div className="flex group" key={index}>
                                                <div className="py-2 rounded-[2rem]  inline-flex flex-col gap-2 items-center">
                                                    <Image className="rounded-md group-hover:scale-110 transition-all duration-1000" height={100} width={100} alt={t.full_name} src={GetFileUrl(t.image)} />
                                                    <div className="flex items-center gap-2">
                                                        {
                                                            t.link_linkedin ?
                                                                <Link href={t.link_linkedin} className="font-semibold " target="_blank">
                                                                    <span className="text-gray-800">{t.full_name}</span>
                                                                </Link> : <span className="text-gray-800 font-semibold">{t.full_name}</span>
                                                        }
                                                        {
                                                            t.link_linkedin && <Link href={t.link_linkedin} className="font-medium text-gray-500" target="_blank">
                                                                <LinkedInLogoIcon fontSize={'2rem'} />
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>

                                </div>
                                <div className="flex justify-center">
                                    <button onClick={handleOpenForm} className="group relative text-primary border border-primary h-12 w-32 hover:w-36 rounded-[2rem] flex items-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                        <Rocket01Icon className="hidden group-hover:inline transition-all ml-2" />
                                        <span className="absolute left-5 group-hover:left-10 transition-all font-semibold font-neue">{locale === 'en' ? 'Register' : 'Бүртгүүлэх'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-main h-20 w-full mt-20" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%' }}></div>
                </div>
            </div>
        </ReactLenis >
    )
}
export default ClientPageClassTraining