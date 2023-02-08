import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CreditPage from "./pages/CreditPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/credit" element={<CreditPage />} />
    </Routes>
  );
};

export default App;
