import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv?.config();

const PORT: string | number = process?.env?.PORT || 8080;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static(join(__dirname, '/'))); // Serve static files from the '/' directory

import { errorHandler } from './middlewares/errorHandler.js';

// Micro routes
import demoRoutes from './routes/demo.routes.js';
// Add rest of your micro routes here

// Use micro routes
app.use('/demo', demoRoutes);
// Add rest of micro routes to put use in here

app.get('/', async (req: Request, res: Response) => {
    res.send(`<h1>Blog Horizon</h1>`);
});

app.get('/testEndpoint', async (req: Request, res: Response) => {
    res.send('Blog Horizon service testEndpoint');
});

// Middleware to handle 404 errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        error: {
            code: 404,
            message: 'Not Found',
            description: 'The requested resource was not found on the server.',
            suggestedAction: 'Check the resource URL or verify that the resource exists.',
        },
    });
});

// Common error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Blog Horizon service is running at ${PORT}`);
});
