import { create } from 'zustand';
import { PRODUCT_PRICE } from '@/constants/price';

type BasketStoreType = {
  baskets: Record<string, number>;
  totalProductsPrice: number;
  setBasket: (productName: string, productCount: number) => void;
};

const useBasketStore = create<BasketStoreType>((set) => ({
  baskets: {},
  totalBasketCount: 0,
  totalProductsPrice: 0,
  setBasket: (productName, productCount) => {
    set((state) => ({
      baskets: {
        ...state.baskets,
        [productName]: productCount,
      },

      totalProductsPrice:
        Object.values({
          ...state.baskets,
          [productName]: productCount,
        }).reduce((acc, cur) => acc + cur, 0) * PRODUCT_PRICE,
    }));
  },
}));

export default useBasketStore;
