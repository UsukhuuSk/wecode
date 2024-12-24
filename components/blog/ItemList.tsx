import useIntersect from "@/context/useIntersect";
import { GetFileUrl } from "@/lib/utils"
import { ArrowRight01Icon } from "@hugeicons/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const BlogListItem = ({ post }: any) => {
    const { locale } = useParams()

    const { ref, isIntersecting } = useIntersect({
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isInsersected, setIntersected] = useState(false)

    useEffect(() => {
        if (isIntersecting) {
            setIntersected(true)
        }
    }, [isIntersecting])



    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setIsError(true);
    };
    return (
        <li ref={ref} className="grid grid-cols-12 gap-4">
            <div className={`col-span-12 md:col-span-5  max-h-80 min-h-80 rounded-xl overflow-hidden ${isLoading ? 'animate-pulse' : ''}`}>
                {
                    isLoading && <div className="h-full w-full bg-slate-500" />
                }
                {isInsersected &&
                    <Link
                        href={`/${locale}/blog/${post._id}`}
                    ><img className="w-full h-full object-cover hover:scale-110 transition-all duration-1000" src={GetFileUrl(post.image._id)} onLoad={handleImageLoad}
                        onError={handleImageError}>
                        </img>
                    </Link>
                }
            </div>
            <div className="col-span-12 md:col-span-7 ">
                <h1 className="text-white">{post.title}</h1>
                <div className="text-white mb-4 font-bold flex flex-col justify-between">
                    <span>
                        <span className="text-gray-200">{locale === 'en' ? `By` : `Бичсэн`}</span> <span className="text-yellow-400">{`${post.created_by && post.created_by.surname ? post.created_by.surname.charAt(0) : ''}.${post.created_by?.given_name}`}</span>
                    </span>
                    <span className="font-normal text-xs text-gray-400">
                        {post.publish_at}
                    </span>
                </div>
                <div
                    className=" text-white text-base font-normal tracking-[0.173px] leading-normal text-start "
                    dangerouslySetInnerHTML={{
                        __html:
                            post.html_content.split(" ").slice(0, 30).join(" ") +
                            "...",
                    }}
                />
                <div className="h-6"></div>
                <Link
                    href={`/${locale}/blog/${post._id}`}
                    className="text-blue-100 hover:text-primary hover:bg-blue-100 font-base font-bold tracking-[0.173px] px-3 py-1 rounded-xl transition-all inline-flex items-center gap-2"
                >
                    {locale === 'en' ? ' Read more' : 'Цааш нь унших'} <ArrowRight01Icon />
                </Link>
            </div>
        </li>
    )
}

export default BlogListItem