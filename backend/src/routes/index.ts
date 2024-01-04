import {
  NextFunction, Request, Response, Router,
} from 'express';
import { login, register } from '../controllers/users';
import auth from '../middlewares/auth';
import CustomError from '../helpers/CustomError';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.use(auth);
router.all('*', (req: Request, res: Response, next: NextFunction) => next(new CustomError(404, 'Маршрут не найден')));
export default router;
