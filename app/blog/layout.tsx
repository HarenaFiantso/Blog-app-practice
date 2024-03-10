import {ReactNode} from "react";
import BlogList from "@/app/components/BlogList";

const BlogLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className='h-[820px] px-[50px] flex flex-row justify-between items-center'>
            <BlogList />
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

export default BlogLayout;