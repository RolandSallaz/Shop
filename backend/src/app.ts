import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errors } from 'celebrate';
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
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(router);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
