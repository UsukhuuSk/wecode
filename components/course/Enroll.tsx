import { useTranslations } from "next-intl";
import { BaseApi } from "../../api/baseApi";
import { toast } from 'react-toastify';
import { Helper } from "../../lib/helper";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Dialog } from "../ui/Dialog";
import Link from "next/link";
interface PropEnroll {
    course: any;
    enroll: any;
    onChange: () => any;
}
export const CourseEnroll: React.FC<PropEnroll> = ({ course, enroll, onChange }) => {
    const { user } = useAuth()
    const [rolling, setRolling] = useState<boolean>(false)
    const trns = useTranslations("course.detail");
    const [openInfo, setOpenInfo] = useState<boolean>(false)
    const handleEnroll = async () => {
        if (!user) return showInfoDialog()
        try {
            setRolling(true)
            await BaseApi._post(`/course/9/enroll`, {
                "course_id": course._id
            })
            Helper.handleSuccess();
            await Helper.wait(300)
            onChange()
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setRolling(false)
        }
    }

    const showInfoDialog = () => {
        setOpenInfo(true)
    }

    const handleClose = () => setOpenInfo(false)


    return (
        <>
            <Dialog isOpen={openInfo} onClose={handleClose} title={""}>
                {
                    <div className="flex flex-col items-center gap-6 p-4">
                        <div className="text-[72px] text-center">
                            🚪🔒
                        </div>
                        <div className="font-bold text-center text-lg md:text-2xl text-wcZinc700">
                            {trns("enrollAuth")}
                        </div>
                        <Link className="w-full" href={'/login'}>
                            <button className="bg-primary rounded-[32px] text-white py-[12px] w-full hover:opacity-90 font-bold">
                            {trns("enrollAuthBtn")}
                            </button>
                        </Link>
                    </div>
                }
            </Dialog >
            {
                !enroll ? <button disabled={rolling} className="bg-primary disabled:bg-gray-400  w-full py-3 rounded-4xl" onClick={handleEnroll}>
                    {trns(rolling ? 'loading' : 'enroll')}
                </button> : <button className="bg-green-500 w-full py-3 rounded-4xl cursor-default">
                    {trns('enrolled')}
                </button>
            }
        </>
    )

}