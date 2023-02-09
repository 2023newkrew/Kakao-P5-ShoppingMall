import React, { useContext, useState } from "react";
import { REQUEST_PATH } from "../../../constant";
import { OrderContext } from "../../../contexts/OrderContext";
import "./SummaryPage.css";

export default function SummaryPage({ setStep }) {
  const [checked, setChecked] = useState(false);
  const { orderData, totals } = useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };
  return (
    <div className="summary-container">
      <h1>주문 확인</h1>
      <div>
        <ul>
          여행 상품 총 가격 : <span data-testid="products-price">{totals[REQUEST_PATH.products]}</span>
          {[...orderData[REQUEST_PATH.products]].map(([name, count]) => (
            <li key={name}>{`${name}  ${count}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          옵션 총 가격: <span data-testid="options-price">{totals[REQUEST_PATH.options]}</span>
          {[...orderData[REQUEST_PATH.options]].map(([name, count]) => (
            <li key={name}>{`${name}  ${count}`}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />

        <label htmlFor="confirm-checkbox">주문을 확인하셨습니까?</label>
        <button disabled={!checked} type="submit">
          주문 실행
        </button>
      </form>
    </div>
  );
}
