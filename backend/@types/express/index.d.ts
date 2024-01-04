import { Request } from 'express';
import { IUser } from '..';

declare global {
  namespace Express {
    interface Request {
      user?:IUser;
    }
  }
}

