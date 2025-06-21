import axiosInstance from '../axios';
import { getBlogsResponse } from '../types/blog.types';

export const getBlogs = async (): Promise<getBlogsResponse> => {
    const { data } = await axiosInstance.get<getBlogsResponse>('/blogs');
    return data;
};
