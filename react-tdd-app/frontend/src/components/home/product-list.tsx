import React, { useMemo } from 'react';
import { Product } from '@/containers/app';
import ProductItem from './product-item';
import {
  ProductListContainer,
  ProductListItemContainer,
  ProductListParagraph,
  ProductListTitle,
} from './product-list.style';
import useBasketStore from '@/stores/use-basket-store';
import { PRODUCT_PRICE } from '@/constants/price';

export type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { totalBasketCount } = useBasketStore();

  const totalPrice = useMemo(() => totalBasketCount * PRODUCT_PRICE, [totalBasketCount]);

  return (
    <ProductListContainer>
      <ProductListTitle>주문 종류</ProductListTitle>
      <ProductListParagraph>하나의 가격</ProductListParagraph>
      <ProductListParagraph>상품 총 가격: {totalPrice}</ProductListParagraph>
      <ProductListItemContainer>
        {products.map((product) => (
          <ProductItem key={crypto.randomUUID()} product={product} />
        ))}
      </ProductListItemContainer>
    </ProductListContainer>
  );
};

export default ProductList;
