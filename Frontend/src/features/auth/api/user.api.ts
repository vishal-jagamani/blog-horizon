import axiosInstance from '@/lib/axios';
import { checkUsernameAvailabilityResponse, getUserByIdResponse, userSignupData, userSignupResponse } from '../auth.types';
import { useAuthStore } from '../auth.store';

export const getUserById = async (id: string): Promise<getUserByIdResponse> => {
    const token = useAuthStore.getState().accessToken;
    const { data } = await axiosInstance.get<getUserByIdResponse>(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return data;
};

export const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    const token = useAuthStore.getState().accessToken;
    const { data } = await axiosInstance.get<checkUsernameAvailabilityResponse>(`/users/username/check?value=${username}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return data?.data || false;
};

export const userSignup = async (data: userSignupData): Promise<userSignupResponse> => {
    const token = useAuthStore.getState().accessToken;
    const { auth0UserId, ...body } = data;
    const { data: userData } = await axiosInstance.put(`/users/${encodeURIComponent(auth0UserId)}/complete-signup`, body, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return userData;
};
