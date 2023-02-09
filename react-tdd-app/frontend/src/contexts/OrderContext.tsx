import React, { createContext, ReactElement, useEffect, useMemo, useState } from 'react';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';

const OrderStateContext = createContext({
  order: {
    products: {
      quantity: 0,
      name: '',
    },
    options: new Set() as Set<string>,
  },

  count: {
    products: 0,
    options: 0,
  },
  total: 0,
});

const OrderDispatchContext = createContext({
  setTravelOrder: (quantity: number, name: string) => {
    // default function
  },
  setOptionOrder: (name: string, isAdd: boolean) => {
    // default function
  },
});

function OrderProvider({ children }: { children: ReactElement }) {
  const [order, setOrder] = useState({
    products: {
      quantity: 0,
      name: '',
    },
    options: new Set() as Set<string>,
  });
  const [count, setCount] = useState({
    products: 0,
    options: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCount({
      products: order.products.quantity,
      options: order.options.size,
    });
    setTotal(order.products.quantity * TRAVEL_PRODUCT_PRICE + order.options.size * OPTION_PRODUCT_PRICE);
  }, [order]);

  const setTravelOrder = (quantity: number, name: string) => {
    setOrder({ ...order, products: { quantity, name } });
  };

  const setOptionOrder = (name: string, isAdd: boolean) => {
    const newOrderSet = new Set(order.options);

    if (isAdd) {
      newOrderSet.add(name);
    } else {
      newOrderSet.delete(name);
    }
    setOrder({ ...order, options: newOrderSet });
  };

  const orderStateValue = useMemo(() => {
    return { order, count, total };
  }, [order, total]);

  const orderDispatchValue = useMemo(() => {
    return { setTravelOrder, setOptionOrder };
  }, [order]);

  return (
    <OrderDispatchContext.Provider value={orderDispatchValue}>
      <OrderStateContext.Provider value={orderStateValue}>{children}</OrderStateContext.Provider>
    </OrderDispatchContext.Provider>
  );
}

export { OrderDispatchContext, OrderStateContext, OrderProvider };
