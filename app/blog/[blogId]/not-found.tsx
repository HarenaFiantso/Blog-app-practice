import Link from "next/link";

const NotFound = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <h1 className="mb-3 font-bold text-2xl">Blog not found</h1>
            <p className="mb-8">Sorry, the blog you are looking for does not exist</p>
            <Link href="/" className="underline">Return Home</Link>
        </div>
    );
}

export default NotFound;