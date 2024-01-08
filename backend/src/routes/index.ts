import { NextFunction, Request, Response, Router } from 'express';
import {
  checkAviableEmail,
  login,
  logout,
  register,
} from '../controllers/users';
import auth from '../middlewares/auth';
import CustomError from '../helpers/CustomError';
import { validateAuth, validateEmail } from '../middlewares/validation';

const router = Router();

router.post('/register', validateAuth, register);
router.post('/login', validateAuth, login);
router.get('/checkEmail/:email', validateEmail, checkAviableEmail);
router.use(auth);
router.post('/logout', logout);
router.all('*', (req: Request, res: Response, next: NextFunction) =>
  next(new CustomError(404, 'Маршрут не найден')),
);
export default router;
