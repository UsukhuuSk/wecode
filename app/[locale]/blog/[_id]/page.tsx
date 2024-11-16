import Image from "next/image";
import Link from "next/link";
import { getBlogDetail, getFile } from "../../../../api/serviceuser";
interface Post {
  _id: string;
  date: string;
  title: string;
  image: any;
  excerpt: string;
  slug: string;
  html_content: string;
  publish_at: string;
}

export default async function BlogDetail({ params }: any) {
  const { _id } = params;

  const param = { lang: "mn" };
  const stringParams = new URLSearchParams(Object.entries<any>(param));
  const post: any = await getBlogDetail({ id: _id, params: stringParams });

  let updatedPost = { ...post };

  if (post.image && post.image._id) {
    try {
      const imageFile = await getFile(post.image._id);
      updatedPost = {
        ...post,
        image: imageFile?.url,
      };
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  console.log(post);
  return (
    <div className="max-w-[1280px] m-auto my-32">
      {/* <div className="flex flex-col">
        <div className="h-[1px] blogline  mb-[48px]  mt-[95px] relative">
          <Link
            href={"/blog"}
            className="flex justify-start items-center absolute -translate-y-full text-white gap-[6px] py-2 px-4 rounded-[48px] bg-[#FFFFFF33] border border-[rgba(255, 255, 255, 0.40)] w-[100px] m-auto"
          >
            <span>Blog</span>
          </Link>
        </div>
      </div> */}
      <div className="max-w-[1005px] m-auto flex flex-col gap-8">
        <h1 className="text-white text-[32px] font-bold leading-snug">
          {post.title}
        </h1>
        <div className="text-white text-sm font-medium tracking-[0.151px] leading-normal">
          <span className="text-[#FFFFFF66] font-normal text-sm">by </span>
          <span className="text-white font-medium text-sm">
            {post.created_by.surname} {post.created_by.given_name}
          </span>
          <span className="text-[#FFFFFF66] font-normal text-sm"> on </span>
          <span className="text-white font-medium text-sm">
            {post.publish_at}
          </span>
        </div>
        <div className="rounded-3xl ">
          {updatedPost.image && (
            <Image
              src={updatedPost.image}
              alt="picture"
              className="rounded-3xl w-full"
              height={337}
              width={600} // Add width for Image component
            />
          )}
        </div>
        <div
          className=" leading-normal text-start text-white font-neue font-bold"
          dangerouslySetInnerHTML={{
            __html: post.html_content,
          }}
        />
      </div>
    </div>
  );
}
