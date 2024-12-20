import { useState } from "react"
import { useTranslations } from "next-intl";
import TopicLessons from "../lessons/Index";
import { ArrowDown01Icon, BookEditIcon } from "@hugeicons/react";

interface TopicProps {
    topic: object;
    index?: number;
    openMiniMenu?: boolean;
}


const TopicItem: React.FC<TopicProps> = ({ topic, index, onPlay, openMiniMenu }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const trns = useTranslations("course.detail");

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={` rounded-xl ${!openMiniMenu ? 'border bg-cardDark ' : ''} md:bg-cardDark md:border border-wcBorder`}>
            <div onClick={() => handleOpen()} className="flex gap-4  px-4 py-3 justify-between cursor-pointer hover:bg-card">
                <div className="flex items-center gap-2">
                    <BookEditIcon height={20} width={20} className="text-green-500" variant="duotone" />
                    <div className=" flex flex-col gap-4">
                        <span className="text-white">{trns("chapter")} {index + 1}: {topic?.name}</span>
                    </div>
                </div>
                <ArrowDown01Icon />
            </div>
            <div className={"oveflow-hidden transition-all " + (open ? '' : "h-0")}>
                <div className={" " + (!open ? 'hidden' : 'px-3 pb-3')}>
                    {
                        <TopicLessons topic={topic} />
                    }
                </div>
            </div>
        </div>
    )
}
export default TopicItem