import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, SALT, db } from '../config';
import CustomError from '../helpers/CustomError';
import { IUser } from '../../@types';

async function sendUserDataWithoutPassword({
  statusCode = 200,
  user,
  res,
}: {
  statusCode?: number;
  user: IUser;
  res: Response;
}) {
  const userWithoutPassword = { ...user, password: undefined };
  const token = await jwt.sign({ ...userWithoutPassword }, JWT_SECRET);
  res
    .status(statusCode)
    .cookie('jwt', token, {
      maxAge: 3600000,
      httpOnly: true,
      sameSite: true,
    })
    .send({ ...userWithoutPassword });
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email, password } = req.body;
  try {
    const tableExists = await db.one(
      "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users')",
    );

    if (!tableExists.exists) {
      // Создание таблицы "users", если она не существует
      await db.none(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255)
          )
        `);
    }

    const existingUser = await db.oneOrNone(
      'SELECT * FROM users WHERE email = $1',
      [email],
    );

    if (existingUser) {
      throw new CustomError(
        409,
        `Пользователь с емейлом ${email} уже зарегистрирован`,
      );
    }
    const hash = await bcrypt.hash(password, SALT);

    await db.none('INSERT INTO users (email, password) VALUES ($1,$2)', [
      email,
      hash,
    ]);
    const user: IUser = await db.one('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    return await sendUserDataWithoutPassword({ user, res, statusCode: 201 });
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user: IUser = await db.one('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    bcrypt.compare(password, user.password!).then((matched) => {
      if (!matched) {
        return next(new CustomError(401, 'Неправильные почта или пароль'));
      }
      return sendUserDataWithoutPassword({ user, res });
    });
  } catch (err) {
    return next(new CustomError(401, 'Неправильные почта или пароль'));
  }
}
