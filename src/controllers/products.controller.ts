import { Request, Response } from 'express';
import productService from '../services/products.service';

const createProduct = async (req: Request, res: Response): Promise<Response | void> => {
  const { name: productName, price: productPrice, orderId } = req.body;
  const newProduct = await productService
    .createProduct({ name: productName, price: productPrice, orderId });
  const { id, name, price } = newProduct.dataValues;
  res.status(201).json({ id, name, price });
};

const getAllProducts = async (req: Request, res: Response): Promise<Response | void> => {
  const allProducts = await productService.getAllProducts();
  res.status(200).json(allProducts);
};

export default { createProduct, getAllProducts };