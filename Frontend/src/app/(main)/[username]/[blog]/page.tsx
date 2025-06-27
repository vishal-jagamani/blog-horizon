'use client';

import React from 'react';

const Page = ({ params }: { params: Promise<{ blog: string }> }) => {
    const { blog } = React.use(params) as { blog: string };

    return (
        <>
            <div>Blog page {blog}</div>
        </>
    );
};

export default Page;
