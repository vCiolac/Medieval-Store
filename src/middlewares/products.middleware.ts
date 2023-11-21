import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

const validateProduct = (req: Request, res: Response, next: NextFunction): Response | void => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.string().required().min(3),
    orderId: Joi.number(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    const status = errorMessage.includes('is required') ? 400 : 422;
    return res.status(status).json({ message: errorMessage });
  }

  next();
};

export default validateProduct;
