import React from "react";
import { Navigate } from "react-router-dom";
import { useOrder } from "../context/order";
import ErrorBoundary from "./ErrorBoundary";
import OrderConfirm, { ProductListEmptyError } from "./OrderConfirm";

function OrderConfirmPage() {
  const { products, options } = useOrder();

  const handleSubmit = () => {};

  return (
    <div className="order-confirm-page">
      <ErrorBoundary
        errorType={ProductListEmptyError}
        fallback={<Navigate to="/" replace={true} />}
      >
        <OrderConfirm
          products={products}
          options={options}
          onSubmit={handleSubmit}
        />
      </ErrorBoundary>
    </div>
  );
}

export default OrderConfirmPage;
