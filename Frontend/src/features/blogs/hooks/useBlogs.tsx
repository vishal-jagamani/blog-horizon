import { createBlog, getBlogs } from '@/features/blogs/api/blogs.api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createBlogData } from '../blogs.types';

export const useBlogs = () => {
    return useQuery({ queryKey: ['blogs'], queryFn: getBlogs, staleTime: 1000 * 60 * 5 });
};

export const useCreateBlog = () => {
    return useMutation({ mutationFn: (data: createBlogData) => createBlog(data), onError: (error) => console.log('Error creating blog', error) });
};
