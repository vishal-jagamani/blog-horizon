import Settings from '@/components/settings/Settings';

const Page = async ({ params }: { params: Promise<{ settingsType: string }> }) => {
    const { settingsType } = await params;
    return <Settings settingsType={settingsType} />;
};

export default Page;
