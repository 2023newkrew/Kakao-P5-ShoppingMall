import styled from 'styled-components';
import Product from './Product';
import { unitPrice } from '../../../stores/orderStore';

const Ul = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
  }
`;

export default function Products({
  products,
  order,
  subtotalPrice,
  handleOrderChange,
}) {
  return (
    <>
      <h2>여행 상품</h2>
      <div>상품당 가격: ₩{unitPrice.products.toLocaleString()}</div>
      <div>상품 총 가격: ₩{subtotalPrice.products.toLocaleString()}</div>
      <Ul>
        {products.map(({ name, imagePath, description }) => (
          <Product
            key={name}
            name={name}
            imagePath={imagePath}
            description={description}
            quantity={order.products[name]}
            handleOrderChange={handleOrderChange}
          />
        ))}
      </Ul>
    </>
  );
}
