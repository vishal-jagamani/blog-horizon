'use client';

import { useUserStore } from '@/features/auth/auth.store';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export const AuthGuard: React.FC = () => {
    const router = useRouter();
    const pathName = usePathname();
    const isUserInitialized = useUserStore((state) => state.isUserInitialized);
    const user = useUserStore((state) => state.userDetails);

    useEffect(() => {
        if (!isUserInitialized) return;
        if (!user || Object.keys(user).length === 0) return;
        console.log('user', user);
        if (!user.completedSignup && pathName !== '/signup') {
            console.log(`user didn't signup`);
            router.push('/signup');
        }
    }, [isUserInitialized, user, pathName, router]);

    return null;
};
