import Link from "next/link";

export default function SingleBlogPage({params}: { params: { blogId: string } }) {

    return (
        <div className="h-screen flex items-center flex-col gap-5 justify-center text-center">
            <h1 className="font-bold text-2xl">Blog-{params.blogId}</h1>
            <Link href={`/blog/${params.blogId}/image`} className='hover:underline'>See the image</Link>
        </div>
    );
}