import PageCourse from "@/components/course/PageCourse";
import { PageCourseError } from "@/components/course/PageCourseError";
import { ServerApi } from "@/api/serverApi";
import { GetFileUrl } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import ClientPageClassTraining from "@/components/classTraining/ClientPage";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    try {
        const data = await ServerApi._get(`9/service_classroom_courses/${params.id}`)
        return {
            title: data.name,
            description: data.description,
            openGraph: {
                images: [data.image ? GetFileUrl(data.image._id) : 'https://ai-academy.asia/_next/static/media/newLogo.8c1df633.svg'],
            },
        }
    } catch (error) {
        return {
            title: 'Ai academy',
            description: 'Ai academy'
        }
    }

}

export default async function Page({ params }: { params: { id: number, locale: any } }) {
    try {
        const data = await ServerApi._get(`9/service_classroom_courses/${params.id}`)
        return <ClientPageClassTraining detail={data} />;
    } catch (error) {
        console.error('course fetch error: ', error)
        return <PageCourseError />
    }

}