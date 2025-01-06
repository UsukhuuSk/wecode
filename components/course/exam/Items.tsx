import { transcode } from "buffer";
import HugeIcon from "../../ui/HugeIcon";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const ExamItem = ({ courseId, exam }: any) => {
    const trns = useTranslations('course.detail')
    const router = useRouter()
    const locale = useLocale()
    const isActive = () => {
        return false;
    }
    const handleExam = () => {
        router.push(`/${locale}/course/${courseId}/${exam._id}`)
    }
    return (
        <li className={"flex items-center justify-between rounded-md hover:bg-card py-1 px-2 cursor-pointer " + (isActive() ? "bg-tpGreen" : "")} onClick={handleExam}>
            <div className="flex items-center gap-2">
                <HugeIcon name="exam" color="white" />
                <span className="text-sm">
                    {exam.name}
                </span>
            </div>
            <div className="text-sm flex justify-between w-[6.5rem] items-center">
                <div className="flex  items-center gap-2">
                    <div className="inline-block w-1 h-1 rounded-full bg-white"></div>
                </div>
                <span>
                    {trns('point')}: &nbsp;
                    {exam?.exam_point}
                </span>
            </div>
        </li>
    )
}