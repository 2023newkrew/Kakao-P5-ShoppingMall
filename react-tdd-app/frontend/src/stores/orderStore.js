import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  order: { products: {}, options: {} },
  setOrder: (order) => set({ order }),
  updateOrder: (type, name, value) =>
    set(({ order }) => ({
      order: {
        ...order,
        [type]: {
          ...order[type],
          [name]: value,
        },
      },
    })),
}));
