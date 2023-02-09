import { render, screen, within } from '@testing-library/react';
import { OrderDispatchContext, OrderStateContext, OrderProvider } from 'contexts/OrderContext';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const DefaultWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <OrderProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </OrderProvider>
  );
};

const contextWrapperRender = (ui: ReactElement, options?: any) => render(ui, { wrapper: DefaultWrapper, ...options });
export * from '@testing-library/react';
export { contextWrapperRender as render };
