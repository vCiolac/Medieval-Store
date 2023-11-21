import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import jwtToken from '../../../src/utils/jwtToken';
import bcrypt from 'bcryptjs';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testando o login e seu token', async function () {
    const mock = loginMock.userLoginMock;
    const userLogin = UserModel.build(mock);
    sinon.stub(UserModel, 'findOne').resolves(userLogin);
    sinon.stub(bcrypt, 'compareSync').returns(true)
    sinon.stub(jwtToken, 'generateToken').returns('token');

    const response = await chai.request(app)
      .post('/login')
      .send(loginMock.loginMock);

    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.deep.equals({token: 'token'});
  });

  it('Testando erro de autenticação', async function () {
    const mock = loginMock.userLoginMock;
    const userLogin = UserModel.build(mock);
    sinon.stub(UserModel, 'findOne').resolves(userLogin);
    sinon.stub(bcrypt, 'compareSync').returns(false)

    const response = await chai.request(app)
      .post('/login')
      .send(loginMock.loginMock);

    expect(response.status).to.be.equals(401);
    expect(response.body).to.be.deep.equals({message: 'Username or password invalid'});
  });
});
