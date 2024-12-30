import { useState } from "react"
import { Dialog } from "../ui/Dialog"
import { Helper } from "@/lib/helper"

const CommmunityButton = ({ text, table, color, onOpen }: any) => {
    const handleApplicant = (event: any, param: any) => {
        event.preventDefault()
        if (!table) return Helper.handleInfo('Тун удахгүй')
        onOpen(table)
    }

    return (
        <div style={{ background: color }} onClick={(e: any) => handleApplicant(e, '1')} className=" text-black py-1 px-2 md:py-3 md:px-5 font-semibold md:font-bold text-xs md:text-sm font-neue rounded-[48px] hover:scale-105 transition-all">
            {text}
        </div>
    )
}
export default CommmunityButton;