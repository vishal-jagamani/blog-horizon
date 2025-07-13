'use client';

import { Button } from '@/components/ui/button';
import { useUserStore } from '@/features/auth/auth.store';
import { useNewBlogStore } from '@/features/blogs/blogs.store';
import { createBlogData } from '@/features/blogs/blogs.types';
import { useBlogs, useCreateBlog } from '@/features/blogs/hooks/useBlogs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { lazy, Suspense, useEffect, useState } from 'react';

const MarkdownEditor = lazy(() => import('@/features/blogs/components/editor/MarkdownEditor'));

const Page: React.FC = () => {
    const router = useRouter();
    const { title, content } = useNewBlogStore();
    const [saveButtonEnabled, setSaveButtonEnabled] = useState<boolean>(false);

    const userDetails = useUserStore((state) => state.userDetails);
    const { mutateAsync } = useCreateBlog();
    const { refetch } = useBlogs();

    useEffect(() => {
        if (title && content) {
            setSaveButtonEnabled(true);
        } else {
            setSaveButtonEnabled(false);
        }
    }, [title, content]);

    const handleSave = async () => {
        if (!title || !content || !userDetails?.sub || !saveButtonEnabled) {
            return;
        }
        const data: createBlogData = {
            title,
            content,
            auth0UserId: userDetails?.sub ?? '',
            authorName: userDetails?.name ?? '',
            authorUserName: userDetails?.nickname ?? '',
        };
        const apiResponse = await mutateAsync(data);
        if (apiResponse.status) {
            await refetch();
            router.push('/');
        }
    };

    return (
        <>
            <Suspense fallback={<div>Loading editor...</div>}>
                <div className="flex h-screen w-screen flex-col space-y-4 p-4">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <p className="text-primary border-primary hidden rounded-md border p-2 text-xl font-bold sm:block">Blog Horizon</p>
                            </Link>
                            <p className="text-xl font-semibold">Create New Post</p>
                        </div>
                        {/* <ToolBar /> */}
                    </div>
                    <div className="flex-grow overflow-hidden">
                        <MarkdownEditor />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Button
                            variant="ghost"
                            className={`text-md bg-primary px-10 font-bold ${saveButtonEnabled ? 'opacity-100 hover:cursor-pointer' : 'opacity-80'}`}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant="outline"
                            className="text-foreground border-border text-md hover:bg-background hover:text-foreground hover:border-background border bg-transparent px-10 font-bold hover:cursor-pointer"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Suspense>
        </>
    );
};

export default Page;
