import Settings from '@/components/settings/Settings';
import React from 'react';

interface PageProps {
    params: { settingsType: string };
}

const Page = async ({ params }: PageProps) => {
    const { settingsType } = params;
    return (
        <>
            <Settings settingsType={settingsType || 'profile'} />
        </>
    );
};

export default Page;
