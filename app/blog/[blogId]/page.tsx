import {NextPage} from "next";
import Link from "next/link";
import {blogs} from "@/app/datas/BlogList";

const BlogPage = ({params}: { params: { blogId: string } }) => {
    return (
        <div>
            <h1>Blog-{params.blogId}</h1>
            <Link href={`/blog/${params.blogId}/image`}>See image</Link>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPage;