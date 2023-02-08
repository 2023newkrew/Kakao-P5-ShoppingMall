import React, { createContext, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

const OrderStateContext = createContext({
  order: {
    products: {
      quantity: 0,
      name: '',
    },
    options: new Set(),
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
    options: new Set(),
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
    setTotal(order.products.quantity * 1000 + order.options.size * 500);
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
