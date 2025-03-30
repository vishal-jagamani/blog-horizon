import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '@/services/apis/blogs/blogService';

export const useBlogs = () => {
    return useQuery({ queryKey: ['blogs'], queryFn: getBlogs, staleTime: 1000 * 60 * 5 });
};
