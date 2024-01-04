import { NextFunction, Request, Response } from 'express';
import { IError } from '../../@types';

export default function errorHandler(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = err.statusCode || 500;

  const message = statusCode === 500 ? 'На сервере произошла ошибка' : err.message;
  res.status(statusCode).send({ message });
  next();
}
