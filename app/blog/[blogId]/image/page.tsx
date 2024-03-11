"use client"

import { blogs } from '@/app/datas/BlogList';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const BlogImagePage = ({ params }: { params: { blogId: number } }) => {
  const randomNumber = Math.round(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/${randomNumber}`;

  if (params.blogId > blogs.length) {
    notFound();
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-3 text-2xl font-bold'>This is Blog {params.blogId} image</h1>
      <Image
        src={imageUrl}
        alt={`Blog ${params.blogId}`}
        width={500}
        height={500}
        className='rounded-2xl opacity-0 transition-opacity duration-[2s]'
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
      />
    </div>
  );
};

export default BlogImagePage;
