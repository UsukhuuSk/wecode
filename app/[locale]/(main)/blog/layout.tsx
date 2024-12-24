import { BlogProvider } from "@/context/BlogContext";


const BlogLayout = ({ children }: any) => {

    return (
        <BlogProvider>
            {children}
        </BlogProvider>
    )
}

export default BlogLayout;