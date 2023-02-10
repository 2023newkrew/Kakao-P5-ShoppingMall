import { OrderContextProvider, OrderCountType } from 'contexts/OrderContext';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

function App() {
  const initialContext: OrderCountType = {
    products: new Map(),
    options: new Map(),
  };
  return (
    <OrderContextProvider initialContext={initialContext}>
      <RouterProvider router={router} />
    </OrderContextProvider>
  );
}

export default App;
