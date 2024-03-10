import Link from "next/link";
import { notFound } from "next/navigation";

const BlogPage = ({params}: { params: { blogId: string } }) => {
    if (parseInt(params.blogId) > 10) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="mb-3 font-bold text-2xl">You clicked the Blog number {params.blogId}</h1>
            <Link href={`/blog/${params.blogId}/image`} className="hover:underline mb-8">See image</Link>
        </div>
    );
}

export default BlogPage;