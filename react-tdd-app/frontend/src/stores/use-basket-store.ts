import { create } from 'zustand';
import { OPTION_PRICE, PRODUCT_PRICE } from '@/constants/price';

type BasketStoreType = {
  totalPrice: number;

  productsBasket: Record<string, number>;
  totalProductsPrice: number;
  setProductsBasket: (productName: string, productCount: number) => void;

  optionsBasket: Record<string, boolean>;
  totalOptionsPrice: number;
  setOptionsBasket: (optionName: string, isChecked: boolean) => void;
};

const useBasketStore = create<BasketStoreType>((set) => ({
  totalPrice: 0,

  productsBasket: {},
  totalProductsPrice: 0,
  setProductsBasket: (productName, productCount) => {
    set((state) => {
      const totalProductsCount = Object.values({
        ...state.productsBasket,
        [productName]: productCount,
      }).reduce((acc, cur) => acc + cur, 0);

      const totalProductsPrice = totalProductsCount * PRODUCT_PRICE;

      return {
        productsBasket: {
          ...state.productsBasket,
          [productName]: productCount,
        },
        totalProductsPrice,
        totalPrice: totalProductsPrice + state.totalOptionsPrice,
      };
    });
  },

  optionsBasket: {},
  totalOptionsPrice: 0,
  setOptionsBasket: (optionName, isChecked) => {
    set((state) => {
      const totalOptionsCount = Object.values({
        ...state.optionsBasket,
        [optionName]: isChecked,
      }).filter(Boolean).length;

      const totalOptionsPrice = totalOptionsCount * OPTION_PRICE;

      return {
        optionsBasket: {
          ...state.optionsBasket,
          [optionName]: isChecked,
        },
        totalOptionsPrice,
        totalPrice: state.totalProductsPrice + totalOptionsPrice,
      };
    });
  },
}));

export default useBasketStore;
