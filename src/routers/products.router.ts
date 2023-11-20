import { Router } from 'express';
import productController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/', productController.createProduct);

productRouter.get('/', productController.getAllProducts);

export default productRouter;