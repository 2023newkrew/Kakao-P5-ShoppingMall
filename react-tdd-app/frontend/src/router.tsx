import { createBrowserRouter } from 'react-router-dom';
import OrderPage from './pages/Order/OrderPage';
import SummaryPage from 'pages/Summary/Summary';
import CompletePage from 'pages/Complete/CompletePage';

export const router = createBrowserRouter([
  { path: '/', element: <OrderPage /> },
  { path: '/summary', element: <SummaryPage /> },
  { path: '/complete', element: <CompletePage /> },
]);
export default router;
