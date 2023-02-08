import { OrderContextProvider } from 'contexts/OrderContext';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

function App() {
  return (
    <OrderContextProvider>
      <RouterProvider router={router} />
    </OrderContextProvider>
  );
}

export default App;
