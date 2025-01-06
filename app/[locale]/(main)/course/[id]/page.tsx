import PageCourse from "@/components/course/PageCourse";
import { PageCourseError } from "@/components/course/PageCourseError";
import { ServerApi } from "@/api/serverApi";
import { GetFileUrl } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const id = params.id
    const data = await ServerApi._checkCourse(id)
    return {
      title: data.name,
      description: data.about,
      openGraph: {
        images: [GetFileUrl(data.image._id)],
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
    const data = await ServerApi._checkCourse(params.id)
    return <PageCourse courseData={data} params={params} />;
  } catch (error) {
    console.error('course fetch error: ', error)
    return <PageCourseError />
  }

}