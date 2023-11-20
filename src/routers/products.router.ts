import { Router } from 'express';
import productController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);

export default productRouter;