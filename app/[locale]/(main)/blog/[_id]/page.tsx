import Image from "next/image";
import { getBlogDetail, getFile } from "../../../../../api/serviceuser";

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
  return (
    <div className="container my-32">
      <div className="flex flex-col gap-8">
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
              className="rounded-3xl w-full max-w-[600px]"
              height={337}
              width={600} // Add width for Image component
            />
          )}
        </div>
        <div
          className=" leading-normal text-start text-white font-neue"
          dangerouslySetInnerHTML={{
            __html: post.html_content,
          }}
        />
      </div>
    </div>
  );
}
