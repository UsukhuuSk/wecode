import { useState } from "react"
import HugeIcon from "../../ui/HugeIcon"
import { useTranslations } from "next-intl";
import { BaseApi } from "../../../api/baseApi";
import { Helper } from "../../../lib/helper";
import TopicLessons from "../lessons/Index";

interface TopicProps {
    topic: object;
    index?: number;
}


const TopicItem: React.FC<TopicProps> = ({ topic, index, onPlay }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const trns = useTranslations("course.detail");

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className=" bg-cardDark rounded-xl border border-wcBorder ">
            <div onClick={() => handleOpen()} className="flex gap-4  px-4 py-3 justify-between cursor-pointer hover:bg-card">
                <div className="flex items-center gap-2">
                    <HugeIcon name="bookEdit" />
                    <div className=" flex flex-col gap-4">
                        <span className="text-white">{trns("chapter")} {index + 1}: {topic?.name}</span>
                    </div>
                </div>
                <HugeIcon name="arrowDown" />
            </div>
            <div className={"oveflow-hidden transition-all " + (open ? '' : "h-0")}>
                <div className={" " + (!open ? 'hidden' : 'px-3 pb-3')}>
                    {
                        <TopicLessons topic={topic}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default TopicItem