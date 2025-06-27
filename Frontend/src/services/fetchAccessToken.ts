import { useAuthStore } from '@/store/auth';

export const fetchAccessToken = async () => {
    try {
        const res = await fetch('/auth/access-token');
        if (!res.ok) {
            throw new Error('User not authenticated or token fetch failed');
        }
        const data: { token: string } = await res.json();
        if (data?.token) {
            useAuthStore.setState({ accessToken: data.token });
            console.log('accessToken', useAuthStore.getState().accessToken);
        }
    } catch (err) {
        console.error('Error getting access token:', err);
    }
};
