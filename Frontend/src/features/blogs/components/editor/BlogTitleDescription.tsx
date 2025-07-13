'use client';

import { Input } from '@/components/ui/input';
import React from 'react';
import { useNewBlogStore } from '@/features/blogs/blogs.store';

const BlogTitleDescription: React.FC = () => {
    const { title, setTitle } = useNewBlogStore();
    return (
        <>
            <div className="flex flex-col">
                <Input
                    placeholder="Enter your title here..."
                    className="bg-background text-foreground h-full w-full resize-none rounded-none rounded-t-sm border-none p-4 font-mono text-3xl font-bold shadow-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
        </>
    );
};

export default BlogTitleDescription;
