import React, { useCallback } from 'react';
import useBasketStore from '@/stores/use-basket-store';
import {
  ProductItemContainer,
  ProductItemContent,
  ProductItemCountInput,
  ProductItemImage,
  ProductItemName,
} from './product-item.style';

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { productsBasket: baskets, setProductsBasket: setBasket } = useBasketStore();

  const onInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBasket(product.name, Number(e.target.value));
    },
    [product.name, setBasket],
  );

  return (
    <ProductItemContainer data-testid={`product-item--${product.name}`}>
      <ProductItemImage
        src={`${process.env.REACT_APP_API_URL}${product.imagePath}`}
        alt={product.name}
      />
      <ProductItemContent>
        <ProductItemName>{product.name}</ProductItemName>
        <ProductItemCountInput
          type="number"
          value={baskets[product.name] || 0}
          onInput={onInput}
          data-testid={`product-item-input--${product.name}`}
          required
        />
      </ProductItemContent>
    </ProductItemContainer>
  );
};

export default ProductItem;
