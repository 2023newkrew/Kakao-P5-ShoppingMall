export type CheckBoxProps = {
  name: string;
  description?: string;
  updateOrder: (name: string, isAdd: boolean) => void;
};

export type QuantityInputProps = {
  name: string;
  imagePath: string;
  description: string;
  updateOrder: (quantity: number, name: string) => void;
};

export type ProductListProps = {
  products: Array<QuantityInputProps & CheckBoxProps>;
  price: number;
  type: string;
};

export type Order = {
  orderNumber: number;
  price: number;
};
