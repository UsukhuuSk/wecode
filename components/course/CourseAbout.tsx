import { useTranslations } from "next-intl";

export const CourseAbout = ({ course }: any) => {
    const trns = useTranslations("course.detail");
    return (
        <div className=" bg-card rounded-xl px-4 pb-3 border border-slate-500">
            <p className="text-white leading-8">
                {trns("about")}
            </p>
            <div className="border-t border-slate-500 pt-4 flex flex-col gap-4">
                <span className="text-white">{course?.about}</span>
            </div>
        </div>
    )
}