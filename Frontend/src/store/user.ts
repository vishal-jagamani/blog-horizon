import { UserProfile } from '@auth0/nextjs-auth0/client';
import { create } from 'zustand';

type UserDetails = {
    userDetails: UserProfile | null;
    updateUserDetails: (userDetails: UserProfile | null) => void;
};

export const userStore = create<UserDetails>((set) => ({
    userDetails: null,
    updateUserDetails: (userDetails) => set({ userDetails }),
}));
