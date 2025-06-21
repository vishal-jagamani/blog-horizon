'use client';

import LeftNavigation from '@/components/home/LeftNavigation';
import React from 'react';
import useScreenSize from '@/utils/hof/useScreenSize';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { isMobile } = useScreenSize();

    return (
        <div className="relative flex w-screen justify-center px-4 md:px-20">
            {!isMobile && (
                <div className="fixed left-20 h-screen w-60 border-r py-6">
                    <LeftNavigation />
                </div>
            )}
            <div className="w-full md:w-[80%]">{children}</div>
            {!isMobile && (
                <div className="fixed right-20 h-screen w-60 border-l py-6">
                    <p>Right Nav</p>
                </div>
            )}
        </div>
    );
}
