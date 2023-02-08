import { createContext, useMemo, useRef, useState } from "react";

export const OrderContext = createContext();

export const pricePerItem = {
  products: 1000,
  options: 500,
};

const _calculateSubTotal = (requestPath, orderData) => {
  let subTotal = 0;
  for (const count of orderData[requestPath].values()) {
    subTotal += count * pricePerItem[requestPath];
  }
  return subTotal;
};

export function OrderContextProvider(props) {
  const [orderData, setOrderData] = useState({ products: new Map(), options: new Map() });
  const totals = useRef({ products: 0, options: 0, total: 0 });
  const value = useMemo(() => {
    const updateOrderData = (itemName, itemCount, requestPath) => {
      const newOrderMap = new Map(orderData[requestPath]);
      newOrderMap.set(itemName, parseInt(itemCount));

      const newOrderData = { ...orderData };
      newOrderData[requestPath] = newOrderMap;

      const productsTotal = _calculateSubTotal("products", newOrderData);
      const optionsTotal = _calculateSubTotal("options", newOrderData);
      totals.current = { products: productsTotal, options: optionsTotal, total: productsTotal + optionsTotal };
      setOrderData(newOrderData);
    };

    return { orderData: { ...orderData }, totals: totals.current, updateOrderData };
  }, [orderData]);

  return <OrderContext.Provider value={value} {...props} />;
}
