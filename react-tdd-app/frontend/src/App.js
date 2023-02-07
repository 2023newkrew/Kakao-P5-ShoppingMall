import MainPage from "./pages/MainPage";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}></Route>
    </Routes>
  );
};

export default App;
