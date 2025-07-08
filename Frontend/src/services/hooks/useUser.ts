import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../apis/user.api';

export const useUserById = (id: string) => {
    return useQuery({ queryKey: ['userById', id], queryFn: () => getUserById(id), staleTime: 1000 * 60 * 5 });
};
