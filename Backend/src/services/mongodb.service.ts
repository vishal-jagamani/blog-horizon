import { Condition, Document, Filter, FindOneAndUpdateOptions, ObjectId, OptionalId, UpdateOptions } from 'mongodb';
import { getDatabase } from '../config/dbConnection.js';

// MongoDB service to find one document
export const findOne = async (collection: string, query: Filter<Document> | Condition<ObjectId>) => {
    try {
        const database = await getDatabase();
        const dbCollection = database.collection(collection);
        const data = await dbCollection.findOne(query);
        return data;
    } catch (err) {
        console.log('Error in mongodb.findOne service', err);
        throw err;
    }
};

// MongoDB service to find last document of any collection
export const findLastDocument = async (collection: string) => {
    try {
        const database = await getDatabase();
        const dbCollection = database.collection(collection);
        const data = await dbCollection.find().sort({}).limit(1).toArray();
        return data;
    } catch (err) {
        console.log('Error in mongodb.findLastDocument service', err);
        throw err;
    }
};

// MongoDB service to insert one document
export const insertOne = async (collection: string, document: OptionalId<Document>) => {
    try {
        const database = await getDatabase();
        const dbCollection = database.collection(collection);
        const data = await dbCollection.insertOne(document);
        return data;
    } catch (err) {
        console.log('Error in mongodbService.insertOne service', err);
        throw err;
    }
};

// MongoDB service to find and update one document
export const findOneAndUpdate = async (
    collection: string,
    filter: Filter<Document>,
    updateQuery: Filter<Document>,
    options: FindOneAndUpdateOptions,
) => {
    try {
        const database = await getDatabase();
        const dbCollection = database.collection(collection);
        const data = await dbCollection.findOneAndUpdate(filter, updateQuery, options);
        return data;
    } catch (err) {
        console.log('Error in mongodbService.insertOne service', err);
        throw err;
    }
};

// MongoDB service to update one document
export const updateOne = async (collection: string, updateQuery: Filter<Document>, filter: Filter<Document>, options: UpdateOptions) => {
    try {
        const database = await getDatabase();
        const dbCollection = database.collection(collection);
        const data = await dbCollection.updateOne(filter, updateQuery, options);
        return data;
    } catch (err) {
        console.log('Error in mongodbService.findOne service', err);
        throw err;
    }
};

// MongoDB service to update or insert one document
// export const updateOrInsertOne = async (collection:string) => {
//     try {
//         const database = await getDatabase();
//         const dbCollection = database.collection(collection);
//         const data = await dbCollection.update(filter, updateQuery);
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.log('Error in mongodbService.updateOrInsertOne service', err);
//         throw err;
//     }
// };
