import PageCourse from "@/components/course/PageCourse";
import { PageCourseError } from "@/components/course/PageCourseError";
import { ServerApi } from "@/api/serverApi";
import Head from "next/head";
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
    const id = params.id
    const data = await ServerApi._checkCourse(id)
   
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: data.name,
      description: data.about,
      openGraph: {
        images: [GetFileUrl(data.image._id), ...previousImages],
      },
    }
  }

export default async function Page({ params }: { params: { id: number, locale: any } }) {
    try {
        const data = await ServerApi._checkCourse(params.id)
        return <PageCourse courseData={data} params={params} />;
    } catch (error) {
        return <PageCourseError />
    }

}