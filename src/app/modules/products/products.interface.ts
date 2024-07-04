export type TVariants = {
  type: "color";
  value: "Black";
};
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};

export default TProduct;
