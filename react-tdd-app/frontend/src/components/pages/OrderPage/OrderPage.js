import React, { useContext } from "react";
import { REQUEST_PATH } from "../../../constant";
import { OrderContext } from "../../../contexts/OrderContext";
import OrderContainer from "./OrderContainer/OrderContainer";
import "./OrderPage.css";

export default function OrderPage({ setStep }) {
  const { totals } = useContext(OrderContext);
  return (
    <div className="order-page">
      <div className="order-page__top">
        <h1>Travel Products</h1>
        <OrderContainer requestPath={REQUEST_PATH.products} />
      </div>
      <div className="order-page__bottom">
        <div className="order-container-style">
          <OrderContainer requestPath="options" />
        </div>
        <div className="order-page__total-price">
          <h2>Total Price : {totals.total}</h2>
          <br />
          <button
            onClick={() => {
              setStep(1);
            }}
            disabled={totals[REQUEST_PATH.products] === 0}
          >
            주문
          </button>
        </div>
      </div>
    </div>
  );
}
