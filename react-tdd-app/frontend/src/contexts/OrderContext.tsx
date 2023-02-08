import React, { createContext, ReactElement, useCallback, useMemo } from 'react';
import { useState } from 'react';

const OrderStateContext = createContext({
  travelProductOrder: {
    quantity: 0,
    name: '',
  },
  optionProductOrder: new Set(),
  travelProductPrice: 1000,
  optionProductPrice: 500,
});

const OrderDispatchContext = createContext({});

function OrderProvider({ children }: { children: ReactElement }) {
  const [order, setOrder] = useState({
    travelProductOrder: {
      quantity: 0,
      name: '',
    },
    optionProductOrder: new Set(),
  });

  const [price, setPrice] = useState({
    travelProductPrice: 1000,
    optionProductPrice: 500,
  });

  const setTravelOrder = useCallback((quantity: number, name: string) => {
    setOrder({ ...order, travelProductOrder: { quantity, name } });
  }, []);

  const setOptionOrder = useCallback((name: string) => {
    const newOrderSet = new Set();
    newOrderSet.add(name);

    setOrder({ ...order, optionProductOrder: newOrderSet });
  }, []);

  const orderStateValue = useMemo(() => {
    return { ...order, ...price };
  }, [order, price]);

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
