import { OrdersProductArray } from "../../src/services/orders.service";

const getOrdersMock = [
  {
    id: 1,
    userId: 1,
    productIds: [
      2,
      1
    ]
  }
];

const getAllOrdersMock = [
  {
    id: 1,
    userId: 1,
    productIds: [2, 1],
  },
  {
    id: 2,
    userId: 3,
    productIds: [4, 3],
  },
  {
    id: 3,
    userId: 2,
    productIds: [5],
  },
];


export default { getOrdersMock, getAllOrdersMock };