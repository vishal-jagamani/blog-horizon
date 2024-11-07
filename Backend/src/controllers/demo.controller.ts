import { Request, Response } from 'express';
import { getCatFact } from '../services/demo.service.js';

export const demoCatFactController = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await getCatFact();
        if (response) {
            res.status(404).json({ message: 'No cat fact found' });
            return;
        }
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
