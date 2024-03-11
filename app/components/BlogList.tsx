import { blogs } from '@/app/datas/BlogList';
import Link from 'next/link';

const BlogList = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-5 border-r border-r-gray-700 p-5 text-center'>
      <h1 className='mb-3 text-2xl font-bold'>List of blogs</h1>
      <ul className='flex flex-col gap-5'>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className='hover:underline'>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
