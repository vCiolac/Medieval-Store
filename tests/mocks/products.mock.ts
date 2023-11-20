import { ProductInputtableTypes } from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

const mockCreateProduct: Product = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
};

const resultMockCreateProduct: ProductInputtableTypes = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
};

export default {
  mockCreateProduct,
  resultMockCreateProduct
};