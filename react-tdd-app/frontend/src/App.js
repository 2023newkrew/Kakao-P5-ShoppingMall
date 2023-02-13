import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CreditPage from "./pages/CreditPage";
import CompletePage from "@pages/CompletePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/credit" element={<CreditPage />} />
      <Route path="/complete" element={<CompletePage />} />
    </Routes>
  );
};

export default App;
