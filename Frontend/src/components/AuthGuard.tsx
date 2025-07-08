'use client';

import { useUserStore } from '@/store/user';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export const AuthGuard: React.FC = () => {
    const router = useRouter();
    const pathName = usePathname();
    const isUserInitialized = useUserStore((state) => state.isUserInitialized);
    const user = useUserStore((state) => state.userDetails);

    useEffect(() => {
        if (!isUserInitialized) return;
        if (user === null) return;
        if (!user.isSignupComplete && pathName !== '/signup') {
            console.log('user is not signup complete');
            // router.push('/signup');
        }
    }, [isUserInitialized, user, pathName, router]);

    return null;
};
