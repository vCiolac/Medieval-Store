import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwtToken';

type LoginBody = {
  username: string;
  password: string;
};

const validateLogin = async ({ username, password }: LoginBody): Promise<string | null> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) return null;
  const token = jwt.generateToken({ id: user.dataValues.id, username: user.dataValues.username });
  return token;
};

export default { validateLogin };