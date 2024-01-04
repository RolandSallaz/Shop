import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import CustomError from '../helpers/CustomError';
import { JWT_SECRET } from '../config';

interface JwtPayload {
  email: string;
  id: number;
}

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new CustomError(401, 'Отсутствует токен'));
  }
  let payload: JwtPayload | null = null;
  try {
    payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = payload;
    return next();
  } catch (err) {
    return next(new CustomError(401, 'Необходима авторизация'));
  }
}
