import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='mb-3 text-2xl font-bold'>Blog not found</h1>
      <p className='mb-8'>Sorry, the blog you are looking for does not exist</p>
      <Link href='/' className='underline'>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
