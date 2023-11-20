import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testando o sucesso 200 ao listar todos os produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves();

    const response = await chai.request(app)
      .get('/products')
      .send();

    expect(response.status).to.be.equals(200);
  });

  it('Testando o retorno de todos os produtos', async function () {
    const mock = productsMock.mockGetProducts
    const build = productModel.build(mock);
    sinon.stub(productsService, 'getAllProducts').resolves([build]);

    const response = await chai.request(app)
      .get('/products')
      .send();

    expect(response.body).to.be.deep.equals(productsMock.mockGetAllProducts);
  });
});
