import { create } from 'zustand';

type AuthStoreType = {
    accessToken: string | null;
    setAccessToken: (accessToken: string | null) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
    accessToken: null,
    setAccessToken: (accessToken: string | null) => set({ accessToken }),
}));
