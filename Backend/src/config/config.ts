import dotenv from 'dotenv';
import path from 'path';
import { auth0ConfigType, mongodbConfigType } from '../types/config.types';

dotenv?.config();
const envFilePath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`);
dotenv?.config({ path: envFilePath });

export const config = {
    url: 'https://catfact.ninja',
};

// export const AUTH0_CONFIG: auth0ConfigType = {
//     DOMAIN: process?.env?.AUTH0_MANAGEMENT_API_DOMAIN || '',
//     AUDIENCE: process?.env?.AUTH0_MANAGEMENT_API_AUDIENCE || '',
//     CLIENT_ID: process?.env?.AUTH0_MANAGEMENT_API_CLIENT_ID || '',
//     CLIENT_SECRET: process?.env?.AUTH0_MANAGEMENT_API_CLIENT_SECRET || '',
// };

export const AUTH0_CONFIG: auth0ConfigType = JSON.parse(process.env.AUTH0_MANAGEMENT_SECRETS || '{}');

export const MONGODB_CONFIG: mongodbConfigType = {
    user: process?.env?.MONGODB_USER || '',
    password: process?.env?.MONGODB_PASSWORD || '',
    database: process?.env?.MONGODB_DATABASE || '',
    connectionString: process?.env?.MONGODB_CONNECTION_STRING || '',
};

// export const MONGODB_CONFIG: mongodbConfigType = JSON.parse(process.env.MONGODB_CREDENTIALS || '{}');
