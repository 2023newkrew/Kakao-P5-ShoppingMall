import React, { Suspense } from "react";
import { fetchOptions, fetchProducts } from "../api";
import ErrorBoundary from "./ErrorBoundary";
import { useResource } from "../hook";
import OrderForm from "./OrderForm";

function OrderFormPage() {
  const productResource = useResource(fetchProducts);
  const optionResource = useResource(fetchOptions);

  return (
    <div className="order-form-page">
      <ErrorBoundary fallback={<p>문제가 발생했습니다.</p>}>
        <h1>Travel Products</h1>
        <Suspense fallback={<p>loading...</p>}>
          <OrderForm
            productResource={productResource}
            optionResource={optionResource}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default OrderFormPage;
