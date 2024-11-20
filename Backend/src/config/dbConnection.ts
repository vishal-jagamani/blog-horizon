import { MongoClient } from 'mongodb';
import { MONGODB_CONFIG } from './config.js';

const client = new MongoClient(MONGODB_CONFIG?.connectionString, { maxPoolSize: 10, minPoolSize: 2, serverSelectionTimeoutMS: 5000 });

export const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export const testDBConnection = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        await client.db(MONGODB_CONFIG?.database).command({ ping: 1 });
        console.log('Database connection successful');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
};

export const getDatabase = async () => {
    return client.db(MONGODB_CONFIG?.database);
};

try {
    await connectDB();
} catch (err) {
    console.log('Error in connecting mongodb', err);
}
