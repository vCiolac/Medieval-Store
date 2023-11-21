import { Router } from 'express';
import productController from '../controllers/products.controller';
import validateProduct from '../middlewares/products.middleware';

const productRouter = Router();

productRouter.post('/', validateProduct, productController.createProduct);

productRouter.get('/', productController.getAllProducts);

export default productRouter;