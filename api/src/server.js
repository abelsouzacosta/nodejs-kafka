import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) =>
  response.status(200).json({
    message: 'Olá mundo',
  }),
);

const { PORT } = process.env || 8080;

app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});
