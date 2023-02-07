import { Product } from '@/containers/app';
import {
  ProductItemContainer,
  ProductItemContent,
  ProductItemCountInput,
  ProductItemImage,
  ProductItemName,
} from './product-item.style';

const ProductItem = ({ product }: { product: Product }) => (
  <ProductItemContainer>
    <ProductItemImage
      src={`${process.env.REACT_APP_API_URL}${product.imagePath}`}
      alt={product.name}
    />
    <ProductItemContent>
      <ProductItemName>{product.name}</ProductItemName>
      <ProductItemCountInput />
    </ProductItemContent>
  </ProductItemContainer>
);

export default ProductItem;
