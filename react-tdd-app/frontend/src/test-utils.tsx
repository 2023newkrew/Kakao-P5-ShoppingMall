import { ReactElement, ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { OrderContextProvider, OrderCountType } from 'contexts/OrderContext';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

// Mocking react-router hooks
jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const AppProviders = ({ children }: { children: ReactNode }) => {
  const context: OrderCountType = {
    options: new Map(),
    products: new Map(),
  };

  return (
    <OrderContextProvider initialContext={context}>
      <BrowserRouter>{children}</BrowserRouter>
    </OrderContextProvider>
  );
};
const customRender = (Element: ReactElement, options?: RenderOptions) => {
  return render(Element, {
    wrapper: AppProviders,
    ...options,
  });
};

export * from '@testing-library/react';
// override render method
export { customRender as render };
