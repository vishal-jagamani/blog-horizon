'use client';

import React from 'react';

import BlogCard from '@/components/home/BlogCard';
import { useBlogs } from '@/services/hooks/useBlogs';

const Page: React.FC = () => {
    const { data, isLoading, error } = useBlogs();

    return (
        <>
            <div className="flex w-full justify-center">
                <div className="w-full py-6 md:w-[80%] md:px-6">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error.message}</p>
                    ) : (
                        <div className="flex flex-col space-y-4">
                            {data?.data?.map((item) => <BlogCard key={item.id} blog={item} />)}
                            {data?.data?.map((item) => <BlogCard key={`copy1-${item.id}`} blog={item} />)}
                            {data?.data?.map((item) => <BlogCard key={`copy2-${item.id}`} blog={item} />)}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;
