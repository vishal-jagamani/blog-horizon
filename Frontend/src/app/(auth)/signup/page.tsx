'use client';

import SignUpInput from '@/components/auth/SignUpInput';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SignupSchema, SignupType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Globe, MapPin, User } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Page: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(SignupSchema), mode: 'onChange' });

    const handleSignup = (data: SignupType) => {
        console.log('signup data', data);
    };

    console.log('error', errors.username?.message);

    return (
        <>
            <div className="flex h-full w-full justify-center md:items-center">
                <div className="mt-10 flex h-fit w-full flex-col rounded-lg px-4 md:mt-0 md:w-[60%]">
                    <h1 className="text-primary text-2xl font-semibold tracking-wide">Complete your signup</h1>
                    <form onSubmit={handleSubmit(handleSignup)} className="mt-8 flex flex-col space-y-5">
                        <SignUpInput
                            icon={User}
                            label="Username"
                            placeholder="Enter unique username..."
                            type="text"
                            error={errors?.username?.message || ''}
                            {...register('username')}
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
