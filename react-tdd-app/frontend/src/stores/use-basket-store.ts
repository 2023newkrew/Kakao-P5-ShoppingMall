import { create } from 'zustand';

type BasketStoreType = {
  productsBasket: { [key: string]: number };
  totalProductsBasketCount: number;
  setProductsBasket: (productName: string, productCount: number) => void;

  optionsBasket: { [key: string]: boolean };
  totalOptionsBasketCount: number;
  setOptionsBasket: (optionName: string, isChecked: boolean) => void;
};

const useBasketStore = create<BasketStoreType>((set) => ({
  productsBasket: {},
  totalProductsBasketCount: 0,
  setProductsBasket: (productName, productCount) => {
    set((state) => ({
      productsBasket: {
        ...state.productsBasket,
        [productName]: productCount,
      },
      totalProductsBasketCount: Object.values({
        ...state.productsBasket,
        [productName]: productCount,
      }).reduce((acc, cur) => acc + cur, 0),
    }));
  },

  optionsBasket: {},
  totalOptionsBasketCount: 0,
  setOptionsBasket: (optionName, isChecked) => {
    set((state) => ({
      optionsBasket: {
        ...state.optionsBasket,
        [optionName]: isChecked,
      },
      totalOptionsBasketCount: Object.values({
        ...state.optionsBasket,
        [optionName]: isChecked,
      }).filter(Boolean).length,
    }));
  },
}));

export default useBasketStore;
