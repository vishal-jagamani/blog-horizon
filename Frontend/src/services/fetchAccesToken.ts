import { useAuthStore } from '@/store/auth';
import { getAccessToken } from '@auth0/nextjs-auth0';

export const fetchAccessToken = async () => {
    try {
        const accessToken = await getAccessToken();
        if (accessToken) {
            useAuthStore.getState().setAccessToken(accessToken);
        }
    } catch (err) {
        console.error('Failed to fetch access token:', err);
    }
};
