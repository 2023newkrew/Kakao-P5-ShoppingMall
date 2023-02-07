import { createBrowserRouter } from 'react-router-dom';
import OrderPage from './pages/Order/OrderPage';

export const router = createBrowserRouter([{ path: '/', element: <OrderPage /> }]);
export default router;
