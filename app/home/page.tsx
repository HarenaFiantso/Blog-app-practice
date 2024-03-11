import { blogs } from '@/app/datas/BlogList';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-3 text-2xl font-bold'>Home</h1>
      <p className='mb-8'>This is the home page</p>
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

export default HomePage;
