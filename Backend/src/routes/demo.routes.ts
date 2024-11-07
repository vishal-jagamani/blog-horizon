import { NextFunction, Request, Response, Router } from 'express';
import { testDBConnection } from '../config/dbConnection.js';
import { demoCatFactController } from '../controllers/demo.controller.js';
import { getAccessToken } from '../services/auth0.service.js';
import { findOne } from '../services/mongodb.service.js';

const router = Router();

// router.get('/catFact', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const response = await getCatFact();
//         res.status(200).json(response);
//     } catch (err) {
//         next(err);
//     }
// });
router.get('/catFact', demoCatFactController);

router.get('/getAuth0AccessToken', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAccessToken();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

router.get('/testDBConnection', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await testDBConnection();
        const response = await findOne('Users', { _id: 1 });
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
});

export default router;
