import { useAuthStore } from '@/features/auth/auth.store';
import axiosInstance from '@/lib/axios';
import { createBlogData, createBlogResponse, getBlogsResponse } from '../blogs.types';

export const getBlogs = async (): Promise<getBlogsResponse> => {
    const token = useAuthStore.getState().accessToken;
    const { data } = await axiosInstance.get<getBlogsResponse>('/blogs', { headers: { Authorization: `Bearer ${token}` } });
    return data;
};

export const createBlog = async (data: createBlogData): Promise<createBlogResponse> => {
    const token = useAuthStore.getState().accessToken;
    const { data: createdBlog } = await axiosInstance.post<createBlogResponse>('/blogs', data, { headers: { Authorization: `Bearer ${token}` } });
    return createdBlog;
};

// export const userSignup = async (data: userSignupData): Promise<userSignupResponse> => {
//     const token = useAuthStore.getState().accessToken;
//     const { auth0UserId, ...body } = data;
//     const { data: userData } = await axiosInstance.put(`/users/${encodeURIComponent(auth0UserId)}/complete-signup`, body, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return userData;
// };