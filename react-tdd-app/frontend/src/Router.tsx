import React from 'react';

import { ProductOrderPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
