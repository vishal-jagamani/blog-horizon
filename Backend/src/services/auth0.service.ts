import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AUTH0_CONFIG } from '../config/config.js';
import { findOne, updateOne } from './mongodb.service.js';

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
        console.error('Error in auth0.getAccessToken service', err);
        throw err;
    }
};

// Function to get the auth0 client credentials token
const getAuth0AccessToken = async () => {
    try {
        const tokenDetails = await findOne('System', { _id: 'auth0' });
        if (tokenDetails) {
            return tokenDetails?.expiryTime > Math.floor(Date.now() / 1000)
                ? { status: true, message: 'Access token found', accessToken: tokenDetails?.access_token }
                : await refreshAuth0AccessToken();
        } else {
            const data = await refreshAuth0AccessToken();
            return data;
        }
    } catch (err) {
        console.error('Error in auth0.refreshSpotifyAccessToken service', err);
        throw err;
    }
};

// Function to get the new auth0 client credentials token and store in db
const refreshAuth0AccessToken = async () => {
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
        const { data }: AxiosResponse = await axios(options);
        const updateQuery = {
            $set: {
                _id: 'auth0',
                accessToken: data?.access_token,
                expiryTime: Math.floor(Date.now() / 1000) + data?.expires_in,
            },
        };
        await updateOne('System', updateQuery, { _id: 'auth0' as any }, { upsert: true });
        return { status: true, message: 'Auth0 access token refreshed', accessToken: data?.access_token };
    } catch (err) {
        console.error('Error in auth0.service.refreshAuth0AccessToken service', err);
        throw err;
    }
};

// Function to make auth0 GET api call
export const GET = async (url: string) => {
    try {
        const tokenDetails = await getAuth0AccessToken();
        if (tokenDetails && tokenDetails?.status) {
            const options: AxiosRequestConfig = {
                url,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${tokenDetails?.accessToken}`,
                },
            };
            const { data } = await axios(options);
            return { status: true, data };
        } else {
            return { status: true, message: 'Spotify access token not found' };
        }
    } catch (err) {
        console.error('Error in auth0.GET service', err);
        throw err;
    }
};
