import React from 'react';

import { ProductOrderPage, OrderConfirmPage, OrderCompletePage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductOrderPage />} />
        <Route path="/confirm" element={<OrderConfirmPage />} />
        <Route path="/complete" element={<OrderCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
