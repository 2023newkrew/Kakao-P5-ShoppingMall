import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Confirm from './pages/confirm';
import Complete from './pages/complete';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}
