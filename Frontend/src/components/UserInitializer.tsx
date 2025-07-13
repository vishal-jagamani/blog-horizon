'use client';

import { useAuthStore, useUserStore } from '@/features/auth/auth.store';
import { fetchAccessToken } from '@/features/auth/hooks/fetchAccessToken';
import { useUserById } from '@/features/auth/hooks/useUser';
import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import React, { useEffect } from 'react';

const UserInitializer: React.FC = () => {
    const { user: auth0User, isLoading: isLoadingAuth0 } = useAuth0User();
    const setUserDetails = useUserStore((state) => state.updateUserDetails);
    const setAuth0UserId = useUserStore((state) => state.setAuth0UserId);
    const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
    const setIsUserInitialized = useUserStore((state) => state.setIsUserInitialized);

    const { data: userById, isSuccess } = useUserById(encodeURIComponent(auth0User?.sub ?? ''));

    useEffect(() => {
        if (!auth0User && !isLoadingAuth0) {
            setUserDetails(null);
            setIsUserInitialized(true);
        }
    }, [auth0User, isLoadingAuth0, setUserDetails, setIsUserInitialized]);

    useEffect(() => {
        if (isLoadingAuth0) return;
        setAuth0UserId(auth0User?.sub ?? '');
        setIsLoggedIn(!!auth0User);
    }, [isLoadingAuth0, setAuth0UserId, setIsLoggedIn, auth0User]);

    // set auth0 access token
    useEffect(() => {
        const getAccessToken = async () => {
            if (!auth0User) return;
            const token = await fetchAccessToken();
            if (token) {
                useAuthStore.getState().setAccessToken(token);
            } else {
                console.warn('[❌] No access token returned');
            }
        };
        getAccessToken();
    }, [auth0User]);

    // set user details
    useEffect(() => {
        if (!auth0User || !isSuccess || !userById?.data) return;
        setUserDetails({
            ...auth0User,
            ...userById?.data,
            completedSignup: userById?.data?.completedSignup ?? false,
            username: userById?.data?.username ?? '',
        });
        setIsUserInitialized(true);
    }, [auth0User, isSuccess, userById, setUserDetails, setIsUserInitialized]);

    return null;
};

export default UserInitializer;
