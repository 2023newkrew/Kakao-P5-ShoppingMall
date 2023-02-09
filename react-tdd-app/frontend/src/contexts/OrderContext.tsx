import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';

type UpdateProductFunction = (key: string, value: number) => void;
type UpdateOptionFunction = (key: string, value: boolean) => void;
export interface OrderCountType {
  products: Map<string, number>;
  options: Map<string, boolean>;
}
export interface OrderContextType extends OrderCountType {
  updateProductCount: UpdateProductFunction;
  updateOption: UpdateOptionFunction;
}
interface OrderContextProviderProps {
  children: ReactNode;
}

const initialContext: OrderCountType = {
  products: new Map(),
  options: new Map(),
};
export const OrderContext = createContext<OrderContextType>({
  products: new Map(),
  options: new Map(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateOption: (key: string, value: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateProductCount: (key: string, value: number) => {},
});

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderCounts, setOrderCounts] = useState<OrderCountType>(initialContext);

  const updateProductCount = useCallback((key: string, updateValue: number) => {
    setOrderCounts((prevOrderCounts) => {
      const newOrderCounts = {
        products: new Map([...prevOrderCounts.products]),
        options: new Map([...prevOrderCounts.options]),
      };

      newOrderCounts.products.set(key, updateValue);

      return newOrderCounts;
    });
  }, []);

  const updateOption = useCallback((key: string, check: boolean) => {
    setOrderCounts((prevOrderCounts) => {
      const newOrderCounts = {
        products: new Map([...prevOrderCounts.products]),
        options: new Map([...prevOrderCounts.options]),
      };

      newOrderCounts.options.set(key, check);

      return newOrderCounts;
    });
  }, []);

  const value: OrderContextType = useMemo(() => {
    return { ...orderCounts, updateProductCount, updateOption };
  }, [orderCounts, updateOption, updateProductCount]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within a OrderProvider');
  }
  return context;
};
