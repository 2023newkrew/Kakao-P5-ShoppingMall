import React, { Suspense } from "react";
import { fetchOptions, fetchProducts } from "../api";
import ErrorBoundary from "./ErrorBoundary";
import { useResource } from "../hook";

function ProductList({ resource }) {
  const products = resource.read();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          <img src={product.imagePath} alt={`${product.name} scene`} />
          <p>{product.name}</p>
        </li>
      ))}
    </ul>
  );
}

function OptionList({ resource }) {
  const options = resource.read();

  return (
    <ul>
      {options.map((option) => (
        <li key={option.name}>{option.name}</li>
      ))}
    </ul>
  );
}

function OrderFormPage() {
  const productResource = useResource(fetchProducts);
  const optionResource = useResource(fetchOptions);

  return (
    <div className="order-form-page">
      <ErrorBoundary fallback={<p>문제가 발생했습니다.</p>}>
        <h1>Travel Products</h1>
        <Suspense fallback={<p>loading...</p>}>
          <ProductList resource={productResource} />

          <h2>Options</h2>
          <Suspense fallback={<p>loading...</p>}>
            <OptionList resource={optionResource} />
          </Suspense>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default OrderFormPage;
