import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersService from '../../../src/services/orders.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('get orders', async function () {
    sinon.stub(OrderModel, 'findAll').resolves([]);
    const result = await ordersService.getAllOrders();
    expect(result).to.be.an('array');
  });
});
