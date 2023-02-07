import React from 'react';
import { Product } from '@/containers/app';
import ProductItem from './product-item';
import { ProductListContainer } from './product-list.style';

export type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ProductListContainer>
    {products.map((product) => (
      <ProductItem key={crypto.randomUUID()} product={product} />
    ))}
  </ProductListContainer>
);

export default ProductList;
