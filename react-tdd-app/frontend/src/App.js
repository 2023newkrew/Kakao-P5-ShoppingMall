import "./App.css";
import SummaryPage from "./components/pages/SummaryPage/SummaryPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {
  return (
    <div className="App">
      {/* 테스트를 위한 랜더링 */}
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
      <SummaryPage />
    </div>
  );
}

export default App;
