'use client'
import CommunityForm from "@/components/community/form";
import { ReactLenis } from "@/lib/lenis";
import { useEffect, useRef } from "react";

export default function RegisterPage() {
    const refForm = useRef<any>(null);
    useEffect(() => {
        handleOpenForm()
    }, [])
    const handleOpenForm = () => {
        refForm.current.openForm('classroom_requests')
    }

    return (
        <ReactLenis root>
            <div className="flex flex-col justify-center items-center h-full w-full relative overflow-hidden mb-20 pt-32 ">
                <div className="absolute z-50 -top-1/4 left-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                <div className="absolute z-50 -top-1/4 right-0 -translate-x-1/2 bg-primary blur-[200px] w-[244px] h-[200px]"></div>
                <CommunityForm ref={refForm} type="BG_FORM" />
            </div>
        </ReactLenis>
    )
}