import { ServerApi } from "../../../../../api/serverApi";
import CourseClientPage from "../../../../../components/course/CourseClientPage";

export default async function Page({ params }: { params: { id: number, locale: any } }) {
    const data = await ServerApi._checkCourse(params.id)
    return <CourseClientPage courseData={data} params={params} />;
}