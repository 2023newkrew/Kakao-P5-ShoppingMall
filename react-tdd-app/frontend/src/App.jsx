import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Confirm from './pages/confirm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
}
