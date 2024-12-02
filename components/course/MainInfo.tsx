import { useTranslations } from "next-intl";
import HugeIcon from "../ui/HugeIcon";

export const CourseMainInfo = ({ course }: any) => {
    const trns = useTranslations("course.detail");

    return (
        <div className="container">
            <div className="h-20 flex justify-between items-center">
                <div className="flex  gap-[10px]">
                    <HugeIcon size={20} name="starOutlined" color={"white"}/>
                    <div>
                        <span className="text-white font-semibold">
                            {course?.avg_rate}
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium text-xs">
                            {trns("rating")}
                        </span>
                    </div>
                </div>
                <div className="flex  gap-[10px]">
                    <HugeIcon size={20} name="timeSchedule" color={"white"} />
                    <div>
                        <span className="text-white font-semibold ">
                            {course?.duration_seconds}
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium text-xs">
                            {trns("length")}
                        </span>
                    </div>
                </div>
                <div className="flex  gap-[10px]">
                    <HugeIcon size={20} name="chart01" color={"white"} />
                    <div>
                        <span className="text-white font-semibold">
                            {course?.level_id?.name}
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium text-xs">
                            {trns("level")}
                        </span>
                    </div>
                </div>
                <div className="flex  gap-[10px]">
                    <HugeIcon size={20} name="globe" color="white"/>
                    <div>
                        <span className="text-white font-semibold">
                            Online
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium text-xs">
                            {trns("access")}
                        </span>
                    </div>
                </div>
                <div className="flex  gap-[10px]">
                    <HugeIcon size={20}  name="diploma" color="white" />
                    <div>
                        <span className="text-white font-semibold">
                            {course && (course.is_certificate ? trns("certTrue") : trns("certFalse"))}
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium text-xs">
                            {trns("completion")}
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}