import React, { useContext } from "react";
import { OrderContext } from "../../../contexts/OrderContext";
import OrderContainer from "./OrderContainer/OrderContainer";
import "./OrderPage.css";

export default function OrderPage() {
  const { totals } = useContext(OrderContext);
  return (
    <div className="order-page">
      <div className="order-page__top">
        <h1>Travel Products</h1>
        <OrderContainer requestPath="products" />
      </div>
      <div className="order-page__bottom">
        <div className="order-container-style">
          <OrderContainer requestPath="options" />
        </div>
        <div className="order-page__total-price">
          <h2>Total Price : {totals.total}</h2>
          <br />
          <button>주문</button>
        </div>
      </div>
    </div>
  );
}
