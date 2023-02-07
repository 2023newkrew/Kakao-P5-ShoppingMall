import { create } from 'zustand';

type BasketStoreType = {
  baskets: { [key: string]: number };
  totalBasketCount: number;
  setBasket: (productName: string, productCount: number) => void;
};

const useBasketStore = create<BasketStoreType>((set) => ({
  baskets: {},
  totalBasketCount: 0,
  setBasket: (productName, productCount) => {
    set((state) => ({
      baskets: {
        ...state.baskets,
        [productName]: productCount,
      },
      totalBasketCount: Object.values({
        ...state.baskets,
        [productName]: productCount,
      }).reduce((acc, cur) => acc + cur, 0),
    }));
  },
}));

export default useBasketStore;
