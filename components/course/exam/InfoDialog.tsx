import { useEffect, useRef, useState } from "react"
import { Dialog } from "../../ui/Dialog"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"
import { useTranslations } from "next-intl"
import CertificateView from "@/components/certificate/Viewer"


export const InfoDialog = ({ info }: any) => {
    const trns = useTranslations('course.exam')
    const router = useRouter()
    const certRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)

    const infoMap: any = {
        giveup: {
            desc: trns('fail'),
            btn: trns('failBtn'),
            img: '🍀🤞✨'
        },
        passed: {
            desc: trns('success'),
            btn: trns('successBtn'),
            img: '🎉✨'
        }
    }
    useEffect(() => {
        if (info)
            setOpen(true)
    }, [info])

    const handlePush = () => {
        if (info.score.student_exam_id) {
            certRef.current.handleOpen(info.score.student_exam_id)
        } else {
            router.push('/course')
        }
    }

    return (
        <>
            <Dialog isOpen={open} onClose={() => { }} title={""} showHeader={false}>
                {
                    info && <div className="flex flex-col items-center gap-6">
                        <div className="text-[72px] text-center">
                            {infoMap?.[info.type]?.img}
                        </div>
                        <div className="font-bold w-[430px] text-center text-2xl text-wcZinc700">
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
                        <button onClick={handlePush} className="bg-primary rounded-[32px] text-white py-[12px] w-full hover:opacity-90">
                            {infoMap?.[info.type]?.btn}
                        </button>
                    </div>
                }
            </Dialog>
            <CertificateView ref={certRef} />
        </>
    )
}