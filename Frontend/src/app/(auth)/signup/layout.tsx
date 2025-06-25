import type { Metadata } from 'next';
import SignUpImage from '@/assets/images/signup.svg';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Complete Signup | Blog Horizon',
    description: 'Finish creating your account to start using Blog Horizon.',
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex h-screen w-screen flex-col bg-white md:flex-row dark:bg-black">
                <div className="relative h-20 md:h-full md:w-1/2">
                    <Image src={SignUpImage} alt="Sign up" fill className="object-cover" priority />
                </div>
                <div className="h-full overflow-y-auto md:w-1/2 md:py-10">{children}</div>
            </div>
        </>
    );
}
