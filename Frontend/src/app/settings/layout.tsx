import { settingsOptions } from '@/config/data.config';
import Link from 'next/link';
import React from 'react';

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-20 my-10 flex w-full space-y-6">
            <div className="flex flex-col">
                {settingsOptions?.map((item) => {
                    return (
                        <Link key={item?.id} href={item?.link} className="flex px-6 py-2 first:pt-0">
                            {item?.title}
                        </Link>
                    );
                })}
            </div>
            <div className="flex w-full flex-col px-10">
                <p className="text-primary text-4xl font-semibold">@vishal_jagamani</p>
                {children}
            </div>
        </div>
    );
};

export default SettingsLayout;
