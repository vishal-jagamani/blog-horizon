import axios, { AxiosRequestConfig } from 'axios';
import { AUTH0_CONFIG } from '../config/config.js';

export const getAccessToken = async () => {
    try {
        const { domain, audience, clientId, clientSecret } = AUTH0_CONFIG;
        const options: AxiosRequestConfig = {
            url: `${domain}/oauth/token`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            data: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                audience: audience,
                grant_type: 'client_credentials',
            }),
        };
        const response = await axios(options);
        return response.data;
    } catch (err) {
        console.log('Error in auth0.getAccessToken service', err);
        throw err;
    }
};
