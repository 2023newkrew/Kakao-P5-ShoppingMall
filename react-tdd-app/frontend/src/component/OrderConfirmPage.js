import React, { useState } from "react";

function OrderConfirmPage({ cart }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="order-confirm-page">
      <form onSubmit={handleSubmit}>
        <h1>주문 확인</h1>
        <label>
          <input
            type="checkbox"
            checked={isConfirmed}
            onChange={(event) => setIsConfirmed(event.target.checked)}
          />
          주문하려는 것을 확인하셨나요?
        </label>
        <br />
        <button disabled={!isConfirmed} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default OrderConfirmPage;
