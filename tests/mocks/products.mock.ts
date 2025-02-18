import { ProductInputtableTypes } from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

const mockCreateProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
};

const resultMockCreateProduct: Product = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
};

const mockGetProducts: Product = {
    id: 6,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 1
  };

const mockGetAllProducts: Product[] = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  },
];

const mockExcalibur: Product =
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    orderId: 1
  };

export default {
  mockCreateProduct,
  resultMockCreateProduct,
  mockGetProducts,
  mockGetAllProducts,
  mockExcalibur
};