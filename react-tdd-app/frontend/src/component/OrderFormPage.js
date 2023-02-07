import React, { Suspense } from "react";
import { fetchProducts } from "../api";
import ErrorBoundary from "./ErrorBoundary";
import { useResource } from "../hook";

function ProductList({ resource }) {
  const products = resource.read();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>{product.name}</li>
      ))}
    </ul>
  );
}

function OrderFormPage() {
  const resource = useResource(fetchProducts);

  return (
    <div className="order-form-page">
      <ErrorBoundary fallback={<p>문제가 발생했습니다.</p>}>
        <h1>Travel Products</h1>
        <Suspense fallback={<p>loading...</p>}>
          <ProductList resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default OrderFormPage;
