import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  totalPrice: 0,
  setTotalPrice: (price) => set((state) => ({ totalPrice: state.totalPrice + price })),

  productList: [],
  setProductList: (product) => set((state) => ({ productList: [...state.productList, product] })),
});

const useStore = create(devtools(store));

export default useStore;
