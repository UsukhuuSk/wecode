import PageCourse from "@/components/course/PageCourse";
import { PageCourseError } from "@/components/course/PageCourseError";
import { ServerApi } from "@/api/serverApi";
import Head from "next/head";
export default async function Page({ params }: { params: { id: number, locale: any } }) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    try {
        const data = await ServerApi._checkCourse(params.id)
        return <>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content={data.about} />
                <meta property="og:title" content={data.name} />
                <meta property="og:description" content={data.about} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={params.locale} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <PageCourse courseData={data} params={params} />;
        </>
    } catch (error) {
        return <PageCourseError />
    }

}