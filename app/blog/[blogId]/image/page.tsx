import Image from "next/image";
import {blogs} from "@/app/datas/BlogList";
import Link from "next/link";

const BlogImagePage = ({params}: { params: { blogId: string } }) => {
    const imageUrl = `https://picsum.photos/200`;

    return (
        <div>
            <h1>Blog-{params.blogId}</h1>
            <Image src={imageUrl} alt={`Blog ${params.blogId}`} width={120} height={120}/>
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

export default BlogImagePage;