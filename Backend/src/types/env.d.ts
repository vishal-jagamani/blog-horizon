// src/types/env.d.ts
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            NODE_ENV: 'local' | 'dev' | 'prod';
            ENABLE_AUTH: string;
            AUTH0_MANAGEMENT_SECRETS: string;
            MONGODB_CREDENTIALS: string;
            MONGODB_CONNECTION_STRING: string;
        }
    }
}

export {};
