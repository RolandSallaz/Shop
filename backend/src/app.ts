import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const {
  PORT = 3000,
  PG_NAME='postgres',
  PG_PASSWORD,
  PG_HOST = "localhost",
  PG_PORT = 5432,
  PG_DB_NAME = 'TestDb',
} = process.env;
import pgPromise from "pg-promise";

const pgp = pgPromise();
const db = pgp(`postgres://${PG_NAME}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB_NAME}`);
db.connect()
  .then((obj) => {
    obj.done(); // Возвращаем соединение в пул
    console.log("Успешное подключение к базе данных");
  })
  .catch((error) => {
    console.error("Ошибка подключения к базе данных:", error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
