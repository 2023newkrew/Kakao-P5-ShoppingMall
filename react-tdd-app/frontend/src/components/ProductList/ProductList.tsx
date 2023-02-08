import { CheckBox, QuantityInput } from 'components';
import React, { useState } from 'react';
import { ProductListProps } from 'types';

function ProductList({ products, price, type }: ProductListProps) {
  return (
    <section>
      <h2>주문 종류</h2>
      <p role="paragraph">하나의 가격: {price}</p>
      <ul className={type === 'products' ? 'flex-row' : undefined}>
        {products.map((product) => (
          <li aria-label={type} key={product.name}>
            {type === 'products' ? (
              <QuantityInput name={product.name} imagePath={product.imagePath} description={product.description} />
            ) : (
              <CheckBox name={product.name} description={product.description} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
