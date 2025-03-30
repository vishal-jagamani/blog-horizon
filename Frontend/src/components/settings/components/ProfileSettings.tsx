'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { UserProfileSchema, UserProfileSchemaType } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProfileSettings: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserProfileSchemaType>({ resolver: zodResolver(UserProfileSchema), mode: 'onChange' });

    const handleUserSettingsOnSubmit = (data: UserProfileSchemaType) => {
        console.log(data);
    };

    return (
        <>
            <div className="flex w-full flex-col">
                <div className="flex w-full flex-col">
                    <p>User</p>
                    <form onSubmit={handleSubmit(handleUserSettingsOnSubmit)} className="flex flex-col">
                        <Input placeholder="Name" {...register('name')} />
                        {errors.name && <span>{errors.name.message}</span>}
                        <Input placeholder="Email" {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}
                        <Input placeholder="Username" {...register('username')} />
                        {errors.username && <span>{errors.username.message}</span>}
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileSettings;
