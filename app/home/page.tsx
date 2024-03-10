import Link from "next/link";
import {blogs} from "@/app/datas/BlogList";

const HomePage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="mb-8 font-bold text-2xl">Home</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`} className="hover:underline">{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;