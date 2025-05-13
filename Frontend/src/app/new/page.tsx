'use client';

import ToolBar from '@/components/blogs/editor/ToolBar';
import Link from 'next/link';
import React, { lazy, Suspense } from 'react';

const MarkdownEditor = lazy(() => import('@/components/blogs/MarkdownEditor'));

const Page: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div>Loading editor...</div>}>
                <div className="flex h-screen w-screen flex-col space-y-8 p-10">
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <p className="text-primary border-primary hidden rounded-md border-1 p-2 text-xl font-bold text-nowrap hover:cursor-pointer sm:block">
                                Blog Horizon
                            </p>
                        </Link>
                        <p className="text-xl font-semibold">Create New Post</p>
                        <ToolBar />
                    </div>
                    <MarkdownEditor />
                </div>
            </Suspense>
        </>
    );
};

export default Page;
