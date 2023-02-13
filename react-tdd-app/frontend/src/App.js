import "./App.css";
import SummaryPage from "./components/pages/SummaryPage/SummaryPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";
import { useState } from "react";
import CompletePage from "./components/pages/CompletePage/CompletePage";

function App() {
  const [step, setStep] = useState("0_ORDER_STEP");

  return (
    <div className="App">
      {/* 테스트를 위한 랜더링 */}
      <OrderContextProvider>
        {step === "0_ORDER_STEP" && <OrderPage setStep={setStep} />}
        {step === "1_SUMMARY_STEP" && <SummaryPage setStep={setStep} />}
        {step === "2_COMPLETE_STEP" && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
