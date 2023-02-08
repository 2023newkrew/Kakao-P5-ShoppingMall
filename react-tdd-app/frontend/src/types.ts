export type CheckBoxProps = {
  name: string;
  description: string;
};

export type QuantityInputProps = {
  name: string;
  imagePath: string;
  description: string;
};

export type ProductListProps = {
  products: Array<QuantityInputProps & CheckBoxProps>;
  price: number;
  type: string;
};
