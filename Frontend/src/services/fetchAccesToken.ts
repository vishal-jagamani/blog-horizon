import { useAuthStore } from '@/store/auth';

export const fetchAccessToken = async () => {
    try {
        const res = await fetch('/auth/access-token');
        const data = await res.json();
        if (data && data?.token) {
            useAuthStore.getState().setAccessToken(data.token);
        }
    } catch (err) {
        console.error('Failed to fetch access token:', err);
    }
};
