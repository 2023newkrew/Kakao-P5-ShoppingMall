import React, { createContext, ReactElement, useEffect, useMemo, useState } from 'react';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';

const OrderStateContext = createContext({
  order: {
    travel: {
      quantity: 0,
      name: '',
    },
    option: new Set() as Set<string>,
  },

  count: {
    travel: 0,
    option: 0,
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
    travel: {
      quantity: 0,
      name: '',
    },
    option: new Set() as Set<string>,
  });
  const [count, setCount] = useState({
    travel: 0,
    option: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCount({
      travel: order.travel.quantity,
      option: order.option.size,
    });
    setTotal(order.travel.quantity * TRAVEL_PRODUCT_PRICE + order.option.size * OPTION_PRODUCT_PRICE);
  }, [order]);

  const setTravelOrder = (quantity: number, name: string) => {
    setOrder({ ...order, travel: { quantity, name } });
  };

  const setOptionOrder = (name: string, isAdd: boolean) => {
    const newOrderSet = new Set(order.option);

    if (isAdd) {
      newOrderSet.add(name);
    } else {
      newOrderSet.delete(name);
    }
    setOrder({ ...order, option: newOrderSet });
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
