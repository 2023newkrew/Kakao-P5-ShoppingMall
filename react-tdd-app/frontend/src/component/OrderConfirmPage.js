import React, { useState } from "react";
import { useOrder } from "../context/order";

function OrderConfirmPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { products, options } = useOrder();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="order-confirm-page">
      <form onSubmit={handleSubmit}>
        <h1>주문 확인</h1>
        <fieldset>
          <h2>Products</h2>
          <ul>
            {products.map(({ name, price, amount }) => (
              <li key={name}>{`${name}: ${price}₩ * ${amount}`}</li>
            ))}
          </ul>
          <h2>Options</h2>
          {options.length ? (
            <ul>
              {options.map(({ name, price }) => (
                <li key={name}>{`${name}: ${price}₩`}</li>
              ))}
            </ul>
          ) : (
            <p>미선택</p>
          )}
        </fieldset>
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
