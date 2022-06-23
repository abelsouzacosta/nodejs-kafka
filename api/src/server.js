import express from 'express';
import 'dotenv/config';
import { Kafka } from 'kafkajs';
import router from './routes';

const app = express();

app.use(express.json());

const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

// middleware para a injeção do producer
app.use((req, res, next) => {
  req.producer = producer;

  return next();
});

app.use(router);

const { PORT } = process.env;

async function run() {
  await producer.connect();

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

run().catch(console.error);
