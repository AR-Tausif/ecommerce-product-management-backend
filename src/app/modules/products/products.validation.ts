import { z } from "zod";
// TVariants validation schema
const variantsSchema = z.object({
  type: z.string().nonempty("type is required"),
  value: z.string().nonempty("value is required"),
});

// TInventory validation schema
const inventorySchema = z.object({
  quantity: z
    .number()
    .nonnegative()
    .int()
    .refine((val) => Number.isInteger(val), {
      message: "quantity must be an integer",
    }),
  inStock: z.boolean(),
});

// TProduct validation schema
const createProductSchema = z.object({
  body: z.object({
    name: z.string().nonempty("name field required"),
    description: z.string().optional(),
    price: z.number().positive("price field required"),
    category: z.string().nonempty("category is required"),
    tags: z.array(z.string()).nonempty("tags are required"),
    variants: z.array(variantsSchema).nonempty("variants are required"),
    inventory: inventorySchema,
  }),
});

const updateSingleProductSchema = createProductSchema.partial({
  body: true,
});

export const ProductValidations = {
  createProductSchema,
  updateSingleProductSchema,
};
