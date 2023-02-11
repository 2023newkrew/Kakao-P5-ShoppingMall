export type CheckBoxProps = {
  name: string;
  updateOrder: (name: string, isAdd: boolean) => void;
};

export type QuantityInputProps = {
  name: string;
  imagePath: string;
  updateOrder: (quantity: number, name: string) => void;
};

export type ProductListProps = TravelProductList | OptionProductList;

export type TravelProductList = {
  type: 'travel';
  products: TravelProduct[];
  price: number;
};

export type OptionProductList = {
  type: 'option';
  products: OptionProduct[];
  price: number;
};

export type TravelProduct = {
  name: string;
  imagePath: string;
  description: string;
};

export type OptionProduct = {
  type: 'option';
  name: string;
  description: string;
};

export type Order = {
  orderNumber: number;
  price: number;
};
