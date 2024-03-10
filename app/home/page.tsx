import Link from "next/link";

export default function HomePage() {
    const blogs: string[] = ['Blog-1', 'Blog-2', 'Blog-3']

    return (
        <div className="h-screen flex items-center flex-col gap-5 justify-center text-center">
            <h1 className="font-bold text-2xl">Home</h1>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <Link href={`/blog/${index + 1}`} className="mb-8 hover:underline">{blog}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}