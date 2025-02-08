import { BaseApi } from "../../../../../api/baseApi";
import { ClientCoursePage } from "../../../../../components/course/lessons/ClientPage";

export default async function Page({ params }: { params: { id: string; locale: string } }) {
 
    const data = await BaseApi._get(`9/service_courses/${params.id}`);
    return <ClientCoursePage data={data} />;
}