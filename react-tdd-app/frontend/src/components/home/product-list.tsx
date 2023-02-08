import React from 'react';
import { Product } from '@/containers/app';
import ProductItem from './product-item';
import {
  ProductListContainer,
  ProductListItemContainer,
  ProductListParagraph,
  ProductListPriceText,
  ProductListTitle,
} from './product-list.style';
import useBasketStore from '@/stores/use-basket-store';

export type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { totalProductsPrice } = useBasketStore();

  return (
    <ProductListContainer>
      <ProductListTitle>주문 종류</ProductListTitle>
      <ProductListParagraph>하나의 가격</ProductListParagraph>
      <ProductListParagraph>
        상품 총 가격:
        <ProductListPriceText data-testid="total-price">{totalProductsPrice}</ProductListPriceText>
      </ProductListParagraph>
      <ProductListItemContainer>
        {products.map((product) => (
          <ProductItem key={crypto.randomUUID()} product={product} />
        ))}
      </ProductListItemContainer>
    </ProductListContainer>
  );
};

export default ProductList;
