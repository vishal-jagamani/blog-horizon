'use client';

import React from 'react';

const ScreenLoader: React.FC = () => {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                <div className="border-t-primary text-primary flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent text-4xl">
                    <div className="border-t-secondary text-secondary flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent text-2xl"></div>
                </div>
            </div>
        </>
    );
};

export default ScreenLoader;
