import {blogs} from "@/app/datas/BlogList";
import Link from "next/link";

const BlogList = () => {
    return (
        <div className="h-full border-r border-r-gray-700 p-5 flex justify-center gap-5 flex-col items-center text-center">
            <h1 className="mb-3 font-bold text-2xl">List of blogs</h1>
            <ul className="flex flex-col gap-5">
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`} className="hover:underline">{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;