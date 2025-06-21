import { User } from '@auth0/nextjs-auth0/types';
import { create } from 'zustand';

type UserDetails = {
    userDetails: User | null;
    updateUserDetails: (userDetails: User | null) => void;
};

export const userStore = create<UserDetails>((set) => ({
    userDetails: null,
    updateUserDetails: (userDetails) => set({ userDetails }),
}));
