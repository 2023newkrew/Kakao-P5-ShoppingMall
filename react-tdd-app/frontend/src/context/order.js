import React, { useContext, useState } from "react";

const orderContext = React.createContext(null);
const setOrderContext = React.createContext(() => {});

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState({ products: [], options: [] });

  return (
    <setOrderContext.Provider value={setOrder}>
      <orderContext.Provider value={order}>{children}</orderContext.Provider>
    </setOrderContext.Provider>
  );
}

function useOrder() {
  return useContext(orderContext);
}

function useSetOrder() {
  return useContext(setOrderContext);
}

export default OrderContextProvider;
export { useOrder, useSetOrder };
