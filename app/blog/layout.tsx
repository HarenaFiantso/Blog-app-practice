import BlogList from '@/app/components/BlogList';
import { ReactNode } from 'react';

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-[820px] flex-row items-center justify-between px-[50px]'>
      <BlogList />
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default BlogLayout;
