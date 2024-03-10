import Link from "next/link";
import {blogs} from "@/app/datas/BlogList";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
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

export default HomePage;