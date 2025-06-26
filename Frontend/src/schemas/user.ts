import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name cannot exceed 50 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters' })
        .max(20, { message: 'Username cannot exceed 20 characters' })
        .regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' }),
});

export type UserType = z.infer<typeof UserSchema>;
