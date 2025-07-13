import { getAccessToken } from '@auth0/nextjs-auth0';

export const fetchAccessToken = async () => {
    try {
        // const res = await fetch('/auth/access-token');
        const token = await getAccessToken();
        if (!token) {
            console.log('User not authenticated or token fetch failed');
        }
        return token;
    } catch (err) {
        console.warn('Error getting access token:', err);
    }
};
