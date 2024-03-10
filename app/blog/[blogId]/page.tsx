import Link from "next/link";

const BlogPage = ({params}: { params: { blogId: number } }) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="mb-3 font-bold text-2xl">You clicked the Blog number {params.blogId}</h1>
            <Link href={`/blog/${params.blogId}/image`} className="hover:underline mb-8">See image</Link>
        </div>
    );
}

export default BlogPage;