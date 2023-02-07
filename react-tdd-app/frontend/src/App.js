import MainPage from "./pages/MainPage";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CreditPage from "./pages/CreditPage";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productList, setProductList] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<MainPage totalPrice={totalPrice} setTotalPrice={setTotalPrice} setProductList={setProductList} />} />
      <Route path="/credit" element={<CreditPage productList={productList} />} />
    </Routes>
  );
};

export default App;
