import { NextFunction, Request, Response } from 'express';

const noAuth = (req: Request, res: Response, next: NextFunction) => {
    next();
};

const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

export const authMiddleware = () => {
    return process.env.ENABLE_AUTH === 'true' ? auth : noAuth;
};
