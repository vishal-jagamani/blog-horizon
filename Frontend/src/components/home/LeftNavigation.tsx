'use client';

import { leftNavigationOptions } from '@/config/data.config';
import Link from 'next/link';
import React from 'react';
import SearchInput from './SearchInput';
import useScreenSize from '@/utils/hof/useScreenSize';

interface LeftNavigationProps {
    closeSheet?: () => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({ closeSheet }) => {
    const { isMobile } = useScreenSize();

    return (
        <>
            <div className="flex w-full flex-col space-y-4 px-4">
                {/* <div> */}
                {isMobile && <SearchInput />}
                {/* </div> */}
                <div className="flex flex-col">
                    {leftNavigationOptions?.map((item) => {
                        return (
                            <div key={item?.id} className="w-full py-2">
                                <Link href={item.link} onClick={closeSheet}>
                                    <p>{item.title}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default LeftNavigation;
