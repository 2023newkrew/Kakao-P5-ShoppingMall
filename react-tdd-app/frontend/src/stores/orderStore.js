import { create } from 'zustand';

export const unitPrice = {
  products: 1000,
  options: 500,
};

export const useOrderStore = create((set, get) => ({
  order: { products: {}, options: {} },
  subtotalPrice: { products: 0, options: 0 },
  totalPrice: 0,
  setOrder: (order) =>
    set({ order, subtotalPrice: { products: 0, options: 0 }, totalPrice: 0 }),
  updateOrder: (type, name, value) => {
    const { order, subtotalPrice } = get();
    order[type][name] = value;
    subtotalPrice[type] = Object.values(order[type]).reduce(
      (acc, cur) => acc + cur * unitPrice[type],
      0
    );
    set({
      order,
      subtotalPrice,
      totalPrice: Object.values(subtotalPrice).reduce(
        (acc, cur) => acc + cur,
        0
      ),
    });
  },
}));
