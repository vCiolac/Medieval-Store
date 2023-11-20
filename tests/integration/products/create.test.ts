import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import productModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  afterEach(function () { sinon.restore(); });

  it('Testando o sucesso ao cadastrar produto', async function () {
    const productRequest = productsMock.mockCreateProduct
    const productBuild = productModel.build(productRequest);

    sinon.stub(productModel, 'create').resolves(productBuild);

    const response = await chai.request(app)
      .post('/products')
      .send(productRequest);

    expect(response.status).to.be.equals(201);
    expect(response.body).to.be.deep.equals(productsMock.resultMockCreateProduct);
  });

  it('Testando o erro ao cadastrar produto', async function () {
    const productRequest = productsMock.resultMockCreateProduct
    const productBuild = productModel.build(productRequest);

    sinon.stub(productModel, 'create').resolves(productBuild);

    const response = await chai.request(app)
      .post('/products')
      .send(productRequest);

    expect(response.status).to.be.equals(500);
  });
});
