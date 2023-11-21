import express from 'express';
import productRouter from './routers/products.router';
import orderRouter from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

export default app;
