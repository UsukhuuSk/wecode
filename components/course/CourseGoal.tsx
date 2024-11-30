import { useTranslations } from "next-intl";
import HugeIcon from "../ui/HugeIcon";

export const CourseGoal = ({ course }: any) => {
    const trns = useTranslations("course.detail");

    return (
        <div className=" bg-card rounded-xl px-4 py-3 border border-slate-500">
            <p className="text-white leading-8">
                {trns("goal")}
            </p>
            <div className="border-t border-slate-500 pt-4 flex flex-col gap-4">
                {
                    course?.learns?.map((c: any) => {
                        return (
                            <div className="text-white flex gap-4 items-center">
                                <div>
                                    <HugeIcon name="checkSolid" height={16} width={16} />
                                </div>
                                <p>
                                    {c}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}