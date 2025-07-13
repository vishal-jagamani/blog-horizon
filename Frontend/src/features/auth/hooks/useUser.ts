import { useMutation, useQuery } from '@tanstack/react-query';
import { checkUsernameAvailability, getUserById, userSignup } from '../api/user.api';
import { userSignupData } from '../auth.types';

export const useUserById = (id: string) => {
    return useQuery({ queryKey: ['userById', id], queryFn: () => getUserById(id), enabled: !!id, staleTime: 1000 * 60 * 5 });
};

export const useCheckUsernameAvailability = (username: string) => {
    return useQuery({
        queryKey: ['checkUsernameAvailability', username],
        queryFn: () => checkUsernameAvailability(username),
        enabled: !!username,
        staleTime: 1000 * 60 * 5,
    });
};

export const useUserSignup = () => {
    return useMutation({ mutationFn: (data: userSignupData) => userSignup(data), onError: (error) => console.log('Error signing up', error) });
};
