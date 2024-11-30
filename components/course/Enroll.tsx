import { useTranslations } from "next-intl";
import { BaseApi } from "../../api/baseApi";
import { toast } from 'react-toastify';
import { Helper } from "../../lib/helper";
import React, { useState } from "react";
interface PropEnroll {
    course: any;
    enroll: any;
    onChange: () => any;
}
export const CourseEnroll: React.FC<PropEnroll> = ({ course, enroll, onChange }) => {
    const [rolling, setRolling] = useState<boolean>(false)
    const trns = useTranslations("course.detail");
    const handleEnroll = async () => {
        try {
            setRolling(true)
            await BaseApi._post(`/course/9/enroll`, {
                "course_id": course._id
            })
            Helper.handleSuccess();
            await Helper.wait(300)
            onChange()
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setRolling(false)
        }
    }
    if (!enroll) {
        return (
            <button disabled={rolling} className="bg-primary disabled:bg-gray-400  w-full py-3 rounded-4xl" onClick={handleEnroll}>
                {trns(rolling ? 'loading' : 'enroll')}
            </button>
        )
    } else {
        return (
            <button className="bg-green-500 w-full py-3 rounded-4xl cursor-default">
                {trns('enrolled')}
            </button>
        )
    }

}