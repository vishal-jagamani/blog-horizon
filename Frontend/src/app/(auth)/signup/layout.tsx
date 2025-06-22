import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Complete Signup | Blog Horizon',
    description: 'Finish creating your account to start using Blog Horizon.',
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex min-h-screen w-full items-center justify-center bg-white px-4 dark:bg-black">{children}</div>
        </>
    );
}
