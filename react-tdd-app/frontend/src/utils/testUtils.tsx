import { render, screen, within } from '@testing-library/react';
import { OrderDispatchContext, OrderStateContext, OrderProvider } from 'contexts/OrderContext';
import { ReactElement } from 'react';

const contextWrapperRender = (ui: ReactElement, options?: any) => render(ui, { wrapper: OrderProvider, ...options });
export * from '@testing-library/react';
export { contextWrapperRender as render };
