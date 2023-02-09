import React from "react";
import { Navigate } from "react-router-dom";
import { useOrder } from "../context/order";
import OrderConfirm, { ProductListEmptyError } from "./OrderConfirm";

class ProductListEmptyErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }
  render() {
    if (this.state.error) {
      if (this.state.error instanceof ProductListEmptyError) {
        return this.props.fallback;
      }
      throw this.state.error;
    }
    return this.props.children;
  }
}

function OrderConfirmPage() {
  const { products, options } = useOrder();

  const handleSubmit = () => {};

  return (
    <div className="order-confirm-page">
      <ProductListEmptyErrorBoundary
        fallback={<Navigate to="/" replace={true} />}
      >
        <OrderConfirm
          products={products}
          options={options}
          onSubmit={handleSubmit}
        />
      </ProductListEmptyErrorBoundary>
    </div>
  );
}

export default OrderConfirmPage;
