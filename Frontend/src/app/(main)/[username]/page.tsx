'use client';

import React from 'react';

const Page = ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = React.use(params) as { username: string };

    return (
        <>
            <div>User profile page {username}</div>
        </>
    );
};

export default Page;
