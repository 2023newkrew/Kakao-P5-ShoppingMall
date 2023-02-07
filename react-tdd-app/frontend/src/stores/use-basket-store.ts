import { create } from 'zustand';

type BasketStoreType = {
  baskets: { [key: string]: number };
  setBasket: (productName: string, productCount: number) => void;
};

const useBasketStore = create<BasketStoreType>((set) => ({
  baskets: {},
  setBasket: (productName, productCount) => {
    set((state) => ({
      baskets: {
        ...state.baskets,
        [productName]: productCount,
      },
    }));
  },
}));

export default useBasketStore;
