import { forwardRef, useImperativeHandle, useState } from "react"
import { Dialog } from "../ui/Dialog";
import { useTranslations } from "next-intl";
const BASEURL = process.env.NEXT_PUBLIC_API_URL;


const CertificateView = forwardRef<any, any>(({ student_exam_id }: any, ref?: any) => {
    const trns = useTranslations('profile')
    const [open, setOpen] = useState<boolean>(false)
    const [studentExamId, setStudentExamId] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true);


    useImperativeHandle(ref, () => ({
        handleOpen
    }));


    const handleOpen = (student_exam_id: any) => {
        setIsLoading(true);
        setStudentExamId(student_exam_id)
        setOpen(true)
    }

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            <Dialog width={800} title={trns('certificate')} isOpen={open} onClose={() => setOpen(false)}>
                <div className={`h-[500px] ${isLoading ? 'bg-slate-200 animate-pulse': ''}`}>
                    <iframe onLoad={handleIframeLoad}
                        className="w-full h-full" src={`${BASEURL}/exam/certificate/${studentExamId}`} />
                </div>
            </Dialog>
        </>
    )
})
CertificateView.displayName ="certViewer";
export default CertificateView