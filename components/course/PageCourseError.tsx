'use client'

import { useTranslations } from "next-intl"

export const PageCourseError = () => {
    const trns = useTranslations('page')
    return <div className="container min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <p className="text-2xl text-white font-bold">{trns('errorText')}</p>
        <button className="px-4 py-2 rounded-xl bg-primary text-white" onClick={() => { window.location.reload() }}>
            {trns('btnText')}
        </button>
    </div>
}