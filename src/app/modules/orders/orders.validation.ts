import { z } from "zod";

const createOrderSchema = z.object({
  body: z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
  }),
});

export const OrderValidations = {
  createOrderSchema,
};
