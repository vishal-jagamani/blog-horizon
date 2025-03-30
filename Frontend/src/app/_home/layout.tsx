'use client';

import LeftNavigation from '@/components/home/LeftNavigation';
import { userStore } from '@/store/user';
import useScreenSize from '@/utils/hof/useScreenSize';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useEffect } from 'react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const { user } = useUser();
    const { userDetails, updateUserDetails } = userStore();
    const { isMobile } = useScreenSize();

    useEffect(() => {
        updateUserDetails(user);
    }, [user, updateUserDetails]);

    return (
        // <div className="bg-background flex min-h-screen w-screen justify-between px-4 sm:px-20">
        //     {!isMobile && (
        //         <div className="flex w-52 border-x-[1px]">
        //             <LeftNavigation />
        //         </div>
        //     )}
        //     <div className="flex w-full border-x-[1px]">{children}</div>
        //     {!isMobile && (
        //         <div className="flex w-52 border-x-[1px]">
        //             <p className="text-wrap">User details: {userDetails?.name}</p>
        //         </div>
        //     )}
        // </div>
        <div className="bg-background flex min-h-screen w-screen justify-between px-4 sm:px-20">
            {!isMobile && (
                <div className="flex w-52 border-x-[1px]">
                    <LeftNavigation />
                </div>
            )}
            <div className="flex w-full border-x-[1px]">{children}</div>
            {!isMobile && (
                <div className="flex w-52 border-x-[1px]">
                    <p className="text-wrap">User details: {userDetails?.name}</p>
                </div>
            )}
        </div>
    );
}
