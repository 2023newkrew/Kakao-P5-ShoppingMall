import { Route, Routes } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/routes';
import Home from '@/containers/home';
import Order from '@/containers/order';
import OrderDone from '@/containers/order-done';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTE_PATH[ROUTE.HOME]} element={<Home />} />
    <Route path={ROUTE_PATH[ROUTE.ORDER]} element={<Order />} />
    <Route path={ROUTE_PATH[ROUTE.ORDER_DONE]} element={<OrderDone />} />
  </Routes>
);

export default AppRouter;
