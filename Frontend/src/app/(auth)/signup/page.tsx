'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { checkUsernameAvailability } from '@/features/auth/api/user.api';
import { useUserStore } from '@/features/auth/auth.store';
import SignUpInput from '@/features/auth/components/SignUpInput';
import { useCheckUsernameAvailability, useUserById, useUserSignup } from '@/features/auth/hooks/useUser';
import { SignupSchema, SignupType } from '@/features/auth/schemas/auth.schema';
import useDebounce from '@/utils/hof/useDebounce';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Globe, MapPin, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

const Page: React.FC = () => {
    const router = useRouter();
    const userDetails = useUserStore((state) => state.userDetails);
    const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({ resolver: zodResolver(SignupSchema), mode: 'onChange', defaultValues: { bio: '', website: '', location: '' } });

    const { mutateAsync } = useUserSignup();

    const usernameInput = useWatch({ control, name: 'username' });
    const debouncedUsername = useDebounce(usernameInput, 500) || '';

    const { data: isAvailable, isLoading: isChecking } = useCheckUsernameAvailability(debouncedUsername);
    const { refetch } = useUserById(encodeURIComponent(userDetails?.sub ?? ''));

    const handleSignup = async (data: SignupType) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const cleaned = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== undefined));
        const signupData = {
            ...cleaned,
            dob: new Date(cleaned?.dob).toLocaleDateString('en-CA'),
            username: cleaned?.username,
            auth0UserId: userDetails?.sub ?? '',
        };
        const apiResponse = await mutateAsync(signupData);
        if (apiResponse.status) {
            await refetch();
            router.push('/');
        }
    };

    useEffect(() => {
        if (!setIsLoggedIn) {
            router.push('/');
        }
    }, [setIsLoggedIn, router]);

    useEffect(() => {
        if (debouncedUsername && debouncedUsername.length >= 3) {
            checkUsernameAvailability(debouncedUsername);
        }
    }, [debouncedUsername]);

    return (
        <>
            <div className="flex h-full w-full justify-center md:items-center">
                <div className="bg-background mt-10 flex h-fit w-full flex-col rounded-lg px-4 py-6 md:mt-0 md:w-[60%]">
                    <h1 className="text-primary self-center text-2xl font-semibold tracking-wide">Complete your signup</h1>
                    <form onSubmit={handleSubmit(handleSignup)} className="mt-8 flex flex-col space-y-5">
                        <SignUpInput
                            label="Name"
                            placeholder="Enter your name..."
                            type="text"
                            error={errors?.name?.message || ''}
                            {...register('name')}
                        />
                        <SignUpInput
                            icon={User}
                            label="Username"
                            placeholder="Enter unique username..."
                            type="text"
                            error={
                                errors?.username?.message ||
                                (debouncedUsername.length >= 3 && !isChecking
                                    ? isAvailable === false
                                        ? 'Username not available'
                                        : 'Username available'
                                    : '')
                            }
                            helperText={debouncedUsername.length >= 3 && !isChecking && isAvailable === true ? 'Username available' : ''}
                            {...register('username')}
                            status={
                                errors?.username?.message
                                    ? 'error'
                                    : debouncedUsername.length >= 3 && !isChecking
                                      ? isAvailable
                                          ? 'success'
                                          : 'error'
                                      : null
                            }
                            extrastyle={debouncedUsername ? (isAvailable ? 'border-green-500' : 'border-red-500') : ''}
                            loading={isChecking}
                        />
                        <SignUpInput
                            icon={Calendar}
                            label="Date of Birth"
                            placeholder="Enter your date of birth..."
                            type="date"
                            error={errors?.dob?.message || ''}
                            {...register('dob')}
                        />
                        <div className="relative">
                            <label htmlFor="bio" className="text-sm font-semibold">
                                Bio
                            </label>
                            <Textarea className="bg-background placeholder:text-foreground" placeholder="Enter your bio..." {...register('bio')} />
                            {errors.bio && <span className="absolute mt-1 text-xs text-red-500">{errors.bio.message}</span>}
                        </div>
                        <SignUpInput
                            icon={Globe}
                            label="Website URL"
                            placeholder="Enter your website url..."
                            type="url"
                            error={errors?.website?.message || ''}
                            {...register('website')}
                        />
                        <SignUpInput
                            icon={MapPin}
                            label="Location"
                            placeholder="Enter your location..."
                            type="text"
                            error={errors?.location?.message || ''}
                            {...register('location')}
                        />
                        <Button type="submit" className="text-background mt-6 w-full self-center hover:cursor-pointer">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page;
