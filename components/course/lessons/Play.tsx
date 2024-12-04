import VideoCourse from "../../video/VideoCourse"

export const LessonPlay = ({ activeLesson, course }: any) => {
 

    return (
        <div className="flex flex-col gap-6">
            <VideoCourse id={activeLesson.video_id?._id}  course_id={course._id} lesson_id={activeLesson._id} />
        </div>
    )
}