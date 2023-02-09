import React, { Suspense, useContext } from "react";
import { fetchOptions, fetchProducts } from "../api";
import ErrorBoundary from "./ErrorBoundary";
import { useResource } from "../hook";
import OrderForm from "./OrderForm";
import { orderContext } from "../context/order";
import { useNavigate } from "react-router-dom";

function OrderFormPage() {
  const productResource = useResource(fetchProducts);
  const optionResource = useResource(fetchOptions);

  const [order, setOrder] = useContext(orderContext);
  const navigate = useNavigate();

  const handleSubmit = (order) => {
    setOrder(order);
    navigate("/confirm");
  };

  return (
    <div className="order-form-page">
      <ErrorBoundary fallback={<p>문제가 발생했습니다.</p>}>
        <h1>Travel Products</h1>
        <Suspense fallback={<p>loading...</p>}>
          <OrderForm
            productResource={productResource}
            optionResource={optionResource}
            onSubmit={handleSubmit}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default OrderFormPage;
