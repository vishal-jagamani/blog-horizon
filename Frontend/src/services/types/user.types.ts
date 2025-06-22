export interface User {
    id: string;
    auth0UserId: string;
    name: string;
    email: string;
    isSignupComplete: boolean;
    createdAt: number;
    updatedAt: number;
}

export interface getUserByIdResponse {
    status: boolean;
    message: string;
    data: User;
}
