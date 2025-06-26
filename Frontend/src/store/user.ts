import { User as Auth0User } from '@auth0/nextjs-auth0/types';
import { create } from 'zustand';

interface User extends Auth0User {
    isSignupComplete: boolean;
}

type UserDetails = {
    auth0UserId: string;
    setAuth0UserId: (auth0UserId: string) => void;
    userDetails: User | null;
    updateUserDetails: (userDetails: User | null) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    getIsLoggedIn: () => boolean;
    isUserInitialized: boolean;
    setIsUserInitialized: (val: boolean) => void;
};

export const useUserStore = create<UserDetails>((set, get) => ({
    auth0UserId: '',
    setAuth0UserId: (auth0UserId) => set({ auth0UserId }),
    userDetails: null,
    updateUserDetails: (userDetails) => set({ userDetails }),
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    getIsLoggedIn: () => !!get().userDetails,
    isUserInitialized: false,
    setIsUserInitialized: (val) => set({ isUserInitialized: val }),
}));
