import { BaseApi } from "../../../../../api/baseApi";
import { ServerApi } from "../../../../../api/serverApi";
import CourseClientPage from "../../../../../components/course/CourseClientPage";
import { ClientCoursePage } from "../../../../../components/course/lessons/ClientPage";

export default async function Page({ params }: { params: { id: number, locale: any } }) {
    const data = await ServerApi._checkCourse(params.id)
    return <CourseClientPage courseData={data} params={params} />;
}