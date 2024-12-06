import PageCourse from "@/components/course/PageCourse";
import { PageCourseError } from "@/components/course/PageCourseError";
import { ServerApi } from "@/api/serverApi";
export default async function Page({ params }: { params: { id: number, locale: any } }) {
    try {
        const data = await ServerApi._checkCourse(params.id)
        return <PageCourse courseData={data} params={params} />;
    } catch (error) {
        return <PageCourseError />
    }

}