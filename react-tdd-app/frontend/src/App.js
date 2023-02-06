import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./components/pages/SummaryPage/SummaryPage";
import OrderContainer from "./components/pages/OrderPage/OrderContainer";

function App() {
  return (
    <div className="App">
      {/* 테스트를 위한 랜더링 */}
      <SummaryPage />
      <OrderContainer itemType={"products"} />
    </div>
  );
}

export default App;
