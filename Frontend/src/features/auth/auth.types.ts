import { User as Auth0User } from '@auth0/nextjs-auth0/types';
import { LucideIcon } from 'lucide-react';

// Store types
export type AuthStoreType = {
    accessToken: string | null;
    setAccessToken: (accessToken: string | null) => void;
};

export type UserStoreType = {
    auth0UserId: string;
    setAuth0UserId: (auth0UserId: string) => void;
    userDetails: User | null;
    updateUserDetails: (userDetails: User | null) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    getIsLoggedIn: () => boolean;
    isUserInitialized: boolean;
    setIsUserInitialized: (val: boolean) => void;
};

export interface User extends Auth0User {
    completedSignup: boolean;
    username: string;
}

// API response types
export interface getUserByIdResponse {
    status: boolean;
    message: string;
    data: User;
}

export interface checkUsernameAvailabilityResponse {
    status: boolean;
    message: string;
    data: boolean;
}

export interface userSignupData {
    auth0UserId: string;
    username: string;
    bio?: string;
    website?: string;
    location?: string;
}

export interface userSignupResponse {
    status: boolean;
    message: string;
    data: User;
}

// Components props
export interface SignUpInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
    error?: string;
    status?: 'success' | 'error' | null;
    helperText?: string;
    extrastyle?: string;
    icon?: LucideIcon;
    loading?: boolean;
}
