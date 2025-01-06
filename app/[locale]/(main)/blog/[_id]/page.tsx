import Image from "next/image";
import { CircleArrowLeft02Icon } from "@hugeicons/react";
import Link from "next/link";
import { ServerApi } from "@/api/serverApi";
import { headers } from 'next/headers';
import { GetFileUrl } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import SafeHtmlContent from "@/components/SafeHtmlContent";

function stripHTMLTags(html: any) {
  return html.replace(/<[^>]*>/g, "");
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const id = params._id

    const data = await ServerApi._get(`9/service_news/${id}`)

    return {
      title: data.title,
      description: stripHTMLTags(data.html_content),
      openGraph: {
        images: [`https://ai-academy.asia/api/file/${data.image._id}`],
      },
    }

  } catch (error) {
    console.error('error on generating metadata: ', error)
    return {
      title: 'title',
      description: 'description'
    }
  }
}

export default async function BlogDetail({ params }: any) {
  const { _id } = params;
  const headersList = headers();

  let post: any = null

  try {
    post = await ServerApi._get(`9/service_news/${_id}`)
  } catch (error) {
    const fullUrl = headersList.get('referer') || "";
    return <div className="container min-h-screen flex flex-col items-center justify-center text-white gap-4">
      <p className="text-2xl text-white font-bold">
        {params.locale === 'en' ? 'Internal server error.' : 'Сервер алдаа гарлаа.'}
      </p>
      <a className="px-4 py-2 rounded-xl bg-primary text-white" href={fullUrl}>
        {params.locale === 'en' ? 'reload' : 'Дахин ачаалах'}
      </a>
    </div>
  }

  return (
    <div className=" my-32">
      <div className="container">
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-[32px] font-bold leading-snug flex items-center gap-4">
            <Link href={'/blog'} className="hover:scale-105 transition-all">
              <CircleArrowLeft02Icon />
            </Link>
            {post.title}
          </h1>
          <div className="text-white text-sm font-medium tracking-[0.151px] leading-normal">

            <span className="text-[#FFFFFF66] font-normal text-sm"> {params.locale === 'en' ? 'by' : 'нийтэлсэн'} </span>
            <span className="text-white font-medium text-sm">
              {post.created_by.surname} {post.created_by.given_name}
            </span>
            <span className="text-[#FFFFFF66] font-normal text-sm"> {params.locale === 'end' ? 'on' : '-'} </span>
            <span className="text-white font-medium text-sm">
              {post.publish_at}
            </span>
          </div>
          <div className="rounded-3xl ">
            {
              post.image &&
              <Image
                src={GetFileUrl(post.image._id)}
                alt="picture"
                className="rounded-3xl w-full max-w-[600px]"
                height={337}
                width={600}
              />
            }
          </div>

          <SafeHtmlContent htmlContent={post.html_content} color="white" />
        </div>
      </div>
    </div>
  );
}
