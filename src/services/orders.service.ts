import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import Product from '../database/models/product.model';

export interface OrderWithProducts extends OrderSequelizeModel {
  id: number;
  userId: number;
  productIds: [{ id: number }];
}

export type OrdersProductArray = {
  id: number;
  userId: number;
  productIds: number[];
};

const getAllOrders = async (): Promise<OrdersProductArray[]> => {
  const allOrdersJoined = await OrderModel.findAll({
    include: [
      {
        model: Product,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  }) as OrderWithProducts[];

  const mapArray: OrdersProductArray[] = allOrdersJoined.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds.map((product) => product.id),
  }));

  return mapArray;
};

export default { getAllOrders };
