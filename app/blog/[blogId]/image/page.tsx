import Image from 'next/image';
import { notFound } from 'next/navigation';

const BlogImagePage = ({ params }: { params: { blogId: string } }) => {
  const imageUrl = `https://picsum.photos/970`;

  if (parseInt(params.blogId) > 10) {
    notFound();
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-3 text-2xl font-bold'>This is Blog {params.blogId} image</h1>
      <Image src={imageUrl} alt={`Blog ${params.blogId}`} width={500} height={500} className='rounded-2xl' />
    </div>
  );
};

export default BlogImagePage;
