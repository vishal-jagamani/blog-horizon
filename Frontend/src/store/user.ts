import { create } from 'zustand';

type UserDetails = {
    userDetails: any;
    updateUserDetails: (userDetails: any) => void;
};

export const userStore = create<UserDetails>((set) => ({
    userDetails: null,
    updateUserDetails: (userDetails) => set({ userDetails }),
}));
