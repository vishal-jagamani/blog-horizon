export interface auth0ConfigType {
    // DOMAIN: string;
    // AUDIENCE: string;
    // CLIENT_ID: string;
    // CLIENT_SECRET: string;
    domain: string;
    audience: string;
    clientId: string;
    clientSecret: string;
}

export interface mongodbConfigType {
    connectionString: string;
    user: string;
    password: string;
    database: string;
}
