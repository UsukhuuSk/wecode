import { useEffect, useRef, useState } from "react"
import { Dialog } from "../../ui/Dialog"
import { useParams, useRouter } from "next/navigation"
import dayjs from "dayjs"
import { useTranslations } from "next-intl"
import CertificateView from "@/components/certificate/Viewer"
import { ArrowLeft04Icon } from "@hugeicons/react"


export const InfoDialog = ({ info, onRetry }: any) => {
    const param = useParams()
    const trns = useTranslations('course.exam')
    const router = useRouter()
    const certRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)

    const infoMap: any = {
        giveup: {
            desc: trns('gaveup'),
            btn: trns('failBtn'),
            img: '🍀🤞✨'
        },
        passed: {
            desc: trns('success'),
            btn: trns('successBtn'),
            img: '🎉✨'
        },
        failed: {
            desc: trns('fail'),
            btn: trns('failBtn'),
            img: '🧐✍️'
        }
    }
    useEffect(() => {
        if (info)
            setOpen(true)
    }, [info])

    const handlePush = () => {
        if (info.score && info.score.student_exam_id) {
            certRef.current.handleOpen(info.score.student_exam_id)
        } else {
            onRetry()
        }
    }

    const backtoCourse = () => {
        router.back()
    }


    return (
        <>
            <Dialog isOpen={open} onClose={() => { }} title={""} showHeader={false}>
                {
                    info && <div className="flex flex-col items-center gap-6">
                        <div className="text-[2rem] md:text-[4.5rem] text-center">
                            {infoMap?.[info.type]?.img}
                        </div>
                        <div className=" md:w-[430px] text-center font-semibold text-lg md:font-bold md:text-2xl text-wcZinc700">
                            {infoMap?.[info.type]?.desc}
                        </div>
                        {
                            info.type === 'passed' &&
                            <div className=" w-full">
                                <div className="flex w-full">
                                    <div className="flex-1">
                                        <p className="text-wcSlate400 text-sm mb-2">{trns('score')}</p>
                                        <span className="text-wcSlate700 font-semibold">
                                            {info.score.percent}%
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-wcSlate400 text-sm mb-2">{trns('date')}</p>
                                        <span className="text-wcSlate700 font-semibold">
                                            {info.score.dateCompleted}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-wcSlate400 text-sm mb-2">{trns('cert')}</p>
                                <span className="text-wcSlate700 font-semibold">
                                    {trns('certDesc')}
                                </span>
                            </div>
                        }
                        <div className="w-full flex flex-col gap-2">
                            <button onClick={handlePush} className="w-full bg-primary rounded-[32px] text-white py-[12px] hover:opacity-90 font-semibold">
                                {infoMap?.[info.type]?.btn}
                            </button>
                            {
                                info.type === 'passed' &&
                                <button onClick={backtoCourse} className="w-full  rounded-[32px] text-primary py-[12px] transition-all  hover:font-bold font-semibold flex items-center justify-center">
                                    <span>
                                        <ArrowLeft04Icon />
                                    </span>
                                    {trns('backtoCourse')}
                                </button>
                            }
                        </div>
                    </div>
                }
            </Dialog>
            <CertificateView ref={certRef} />
        </>
    )
}