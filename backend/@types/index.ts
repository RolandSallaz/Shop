export interface IError extends Error {
  statusCode: number;
}

export interface IUser {
  id: number;
  email: string;
  password?:string;
}
