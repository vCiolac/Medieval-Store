import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel }
  from '../database/models/product.model';

const createProduct = async ({ name, price, orderId }: ProductInputtableTypes)
: Promise<ProductSequelizeModel> => {
  const newProduct = await ProductModel.create({ name, price, orderId });
  return newProduct;
};

const getAllProducts = async (): Promise<ProductSequelizeModel[]> => {
  const allProducts = await ProductModel.findAll();
  return allProducts;
};

export default { createProduct, getAllProducts };