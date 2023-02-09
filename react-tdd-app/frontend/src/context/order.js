import React, { useState } from "react";

const orderContext = React.createContext(null);

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState({ products: [], options: [] });

  return (
    <orderContext.Provider value={[order, setOrder]}>
      {children}
    </orderContext.Provider>
  );
}

export default OrderContextProvider;
export { orderContext };
