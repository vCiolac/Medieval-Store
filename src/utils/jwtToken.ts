import jwt, { Secret } from 'jsonwebtoken';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'secret';

export type TokenLogin = {
  id: number;
  username: string;
};

const generateToken = (payload: TokenLogin): string => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

export default { generateToken };
