import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();

export const {
  PORT = 3000,
  SALT = 10,
  JWT_SECRET = 'SECRETKEY',
  PG_NAME = 'postgres',
  PG_PASSWORD,
  PG_HOST = 'localhost',
  PG_PORT = 5432,
  PG_DB_NAME = 'TestDb',
} = process.env;

export const db = pgp(
  `postgres://${PG_NAME}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB_NAME}`,
);
