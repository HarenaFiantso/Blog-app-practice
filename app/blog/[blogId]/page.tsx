import { blogs } from '@/app/datas/BlogList';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BlogPage = ({ params }: { params: { blogId: number } }) => {
  if (params.blogId > blogs.length) {
    notFound();
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-3 text-2xl font-bold'>You clicked the Blog number {params.blogId}</h1>
      <Link href={`/blog/${params.blogId}/image`} className='mb-8 hover:underline'>
        See image
      </Link>
    </div>
  );
};

export default BlogPage;
