import axiosInstance from '../../axios';

export const getBlogs = async () => {
    const { data } = await axiosInstance.get('/fact');
    return data;
};
