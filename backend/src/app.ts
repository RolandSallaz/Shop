import express from 'express';

import cookieParser from 'cookie-parser';
import { PORT, db } from './config';
import router from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

db.connect()
  .then((client) => {
    client.done(); // Возвращаем соединение в пул
    console.log('Успешное подключение к базе данных');
  })
  .catch((error: Error) => {
    throw new Error(`Ошибка подключения к базе данных: ${error}`);
  });
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
