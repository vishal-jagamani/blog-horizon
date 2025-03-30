'use client';

import React from 'react';

import Link from 'next/link';

const Page: React.FC = () => {
    return (
        <>
            {/* <div className="bg-background flex h-[200vh] w-screen justify-between mx-4 sm:mx-20"> */}
            {/* {!isMobile && (
                    <div className="flex w-52 border-x-[1px]">
                        <LeftNavigation />
                    </div>
                )} */}
            <div className="flex w-full border-x-[1px]">
                <p>
                    <Link href="/api/auth/login">Login</Link>
                    <Link href="/api/auth/logout">Logout</Link>
                </p>
            </div>
            {/* {!isMobile && (
                    <div className="flex w-52 border-x-[1px]">
                        <p className="text-wrap">User details: {userDetails?.name}</p>
                    </div>
                )} */}
            {/* </div> */}
        </>
    );
};

export default Page;
