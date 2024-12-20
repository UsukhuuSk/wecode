import { useTranslations } from "next-intl";
import { CourseEnroll } from "./Enroll"
import { GetFileUrl } from "../../lib/utils";

export const CourseInstructor = ({ course, teachers, enrolled, onChange }: any) => {
    const trns = useTranslations("course.detail");

    return (
        <div className={"rounded-xl px-4 py-3 text-white " + (enrolled ? "bg-cardDark border border-wcBorder" : "bg-[#334155]")}>
            {
                !enrolled && <div className="text-white border-b border-slate-500 p-2 font-medium">
                    {course?.name}
                </div>
            }
            <div className={"text-sm " + (enrolled ? "mb-2" : "my-2 ")}>
                {trns('instructor')}
            </div>
            <div className={"grid grid-cols-2 gap-2 " + (enrolled ? "" : "mb-4")}>
                {teachers.map((t: any, index: number) => {
                    return (
                        <div key={index} className="col-span-1  lg:col-span-2 xl:col-span2 2xl:col-span-2 flex gap-4">
                            <div className="w-8 h-8 rounded-full overflow-hidden flex justify-center items-start bg-gray-900">
                                <img
                                    sizes="20px"
                                    src={GetFileUrl(t.image)}
                                />
                            </div>
                            <span className="text-sm">
                                {t.full_name}
                            </span>
                        </div>
                    )
                })}
            </div>
            {
                !enrolled && <div>
                    <CourseEnroll course={course} enroll={enrolled} onChange={onChange} />
                </div>
            }
        </div>
    )
}