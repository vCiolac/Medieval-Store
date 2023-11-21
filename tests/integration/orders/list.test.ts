import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ordersMock from '../../mocks/orders.mock';
import app from '../../../src/app';
import ordersService from '../../../src/services/orders.service';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testando o retorno de todos os produtos', async function () {
    const mock = ordersMock.getAllOrdersMock;
    sinon.stub(ordersService, 'getAllOrders').resolves(mock);

    const response = await chai.request(app)
      .get('/orders')
      .send();

    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.deep.equals(ordersMock.getAllOrdersMock);
  });

});
