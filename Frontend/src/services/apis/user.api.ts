import { getAccessToken } from '@auth0/nextjs-auth0';
import axiosInstance from '../axios';
import { getUserByIdResponse } from '../types/user.types';

export const getUserById = async (id: string): Promise<getUserByIdResponse> => {
    const accessToken = await getAccessToken();
    const { data } = await axiosInstance.get<getUserByIdResponse>(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return data;
};
