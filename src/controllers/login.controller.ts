import { Request, Response } from 'express';
import loginService from '../services/login.service';

const handleLogin = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const token = await loginService
    .validateLogin({ username, password });
  if (!token) return res.status(401).json({ message: 'Username or password invalid' });
  return res.status(200).json({ token });
};

export default {
  handleLogin,
};