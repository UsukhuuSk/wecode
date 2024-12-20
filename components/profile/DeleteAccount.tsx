'use client'
import { useTranslations } from "next-intl"
import { Dialog } from "../ui/Dialog"
import { useState } from "react"
import { Helper } from "@/lib/helper"
import { useAuth } from "@/context/AuthContext"
import { BaseApi } from "@/api/baseApi"
import { SymbolIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"


export const DeleteAccount = () => {
    const { user, logout } = useAuth()
    const trns = useTranslations('profile')
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleConfirm = () => {
        setOpen(true)
    }

    const handleDelete = async () => {
        try {
            setLoading(true)
            await BaseApi._delete(`/9/service_user_profile/${user._id}`)
            await Helper.wait(300)
            setOpen(false)
            setLoading(false)
            Helper.handleInfo(trns('deleted'))
            await Helper.wait(500)
            logout()
            router.push('/')
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)

        }
    }

    return (
        <>
            <Dialog isOpen={open} onClose={() => setOpen(false)} title={trns('delTitle')}>
                {
                    <div className="flex flex-col items-center gap-6">
                        <div className="text-[72px] text-center">
                            ❗🚨⚠️
                        </div>
                        <div className="font-bold w-[430px] text-center text-red-500">
                            {trns('delDescConfirm')}
                        </div>
                        <div className="w-full flex  gap-2">
                            <button disabled={loading} onClick={() => setOpen(false)} className="w-2/3 bg-primary border text-white border-primary hover:bg-[#2000a9] rounded-[32px] py-[6px] hover:opacity-90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                                {trns('cancelDelBtn')}
                            </button>
                            <button disabled={loading} onClick={handleDelete} className="w-1/3 flex items-center justify-center text-red-500 disabled:opacity-50 disabled:cursor-not-allowed border border-red-500 hover:bg-red-100 rounded-[32px] py-[6px] hover:opacity-90 font-semibold">
                                {loading && <SymbolIcon className="animate-spin" />}
                                {trns('confirmDelBtn')}
                            </button>

                        </div>
                    </div>
                }
            </Dialog>
            <div className="flex items-center justify-between mt-36 md:mt-0">
                <div >
                    <h3 className="text-lg font-medium text-white mb-1">
                        {trns('delTitle')}
                    </h3>
                    <p className="text-sm text-wcSlate400">
                        {trns('delDesc')}
                    </p>
                    <button onClick={handleConfirm} className="border border-[#EF4444] text-[#EF4444] hover:scale-105 transition-all px-6 py-3 mt-4 rounded-[32px] font-neue font-semibold text-sm">
                        {trns('delBtn')}
                    </button>
                </div>

            </div>
        </>
    )
}