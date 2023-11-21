import ProductModel,
{ ProductInputtableTypes, ProductSequelizeModel }
  from '../database/models/product.model';

const validateProduct = ({ name, price, orderId }: ProductInputtableTypes): string | null => {
  if (!name || !price || !orderId) return 'name, price or orderId is missing';
  return null;
};

const createProduct = async ({ name, price, orderId }: ProductInputtableTypes)
: Promise<ProductSequelizeModel> => {
  const validationError = validateProduct({ name, price, orderId });
  if (validationError) throw new Error(validationError);
  const newProduct = await ProductModel.create({ name, price, orderId });
  return newProduct;
};

const getAllProducts = async (): Promise<ProductSequelizeModel[]> => {
  const allProducts = await ProductModel.findAll();
  return allProducts;
};

export default { createProduct, getAllProducts };