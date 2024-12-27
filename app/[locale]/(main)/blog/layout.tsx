import { BlogProvider } from "@/context/BlogContext";
import { ReactLenis } from "@/lib/lenis";


const BlogLayout = ({ children }: any) => {

    return (
        <ReactLenis root>
            <BlogProvider>
                {children}
            </BlogProvider>
        </ReactLenis>
    )
}

export default BlogLayout;