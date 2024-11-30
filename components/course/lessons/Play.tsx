import VideoCourse from "../../video/VideoCourse"

export const LessonPlay = ({ activeLesson }: any) => {

    return (
        <div>
            <VideoCourse id={activeLesson.video_id?._id} />
            <p className="text-white">
                {activeLesson.name}
            </p>
        </div>
    )
}