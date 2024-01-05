import { NextFunction, Request, Response, Router } from 'express';
import { login, register } from '../controllers/users';
import auth from '../middlewares/auth';
import CustomError from '../helpers/CustomError';
import { validateAuth } from '../middlewares/validation';

const router = Router();

router.post('/register', validateAuth, register);
router.post('/login', validateAuth, login);
router.use(auth);
router.all('*', (req: Request, res: Response, next: NextFunction) => next(new CustomError(404, 'Маршрут не найден')));
export default router;
