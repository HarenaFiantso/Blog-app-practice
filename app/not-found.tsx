import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='mb-3 text-2xl font-bold'>This page is Not Found</h1>
      <p className='mb-8'>Sorry, the page you are looking for does not exist</p>
      <Link href='/' className='underline'>
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
