export const GET = async () => {
    console.log('🔐 AUTH0 ENV VARS CHECK');
    console.log('AUTH0_SECRET:', process.env.AUTH0_SECRET);
    console.log('APP_BASE_URL:', process.env.APP_BASE_URL);
    console.log('AUTH0_DOMAIN:', process.env.AUTH0_DOMAIN);
    console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID);
    console.log('AUTH0_CLIENT_SECRET:', process.env.AUTH0_CLIENT_SECRET);

    return new Response(JSON.stringify({ status: 'Logged to server console' }), {
        status: 200,
    });
};
