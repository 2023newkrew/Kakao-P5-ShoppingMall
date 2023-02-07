import { useCallback } from 'react';
import { Product } from '@/containers/app';
import useBasketStore from '@/stores/use-basket-store';
import {
  ProductItemContainer,
  ProductItemContent,
  ProductItemCountInput,
  ProductItemImage,
  ProductItemName,
} from './product-item.style';

const ProductItem = ({ product }: { product: Product }) => {
  const { baskets, setBasket } = useBasketStore();

  const onInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBasket(product.name, Number(e.target.value));
    },
    [product.name, setBasket],
  );

  return (
    <ProductItemContainer>
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
          required
        />
      </ProductItemContent>
    </ProductItemContainer>
  );
};

export default ProductItem;
