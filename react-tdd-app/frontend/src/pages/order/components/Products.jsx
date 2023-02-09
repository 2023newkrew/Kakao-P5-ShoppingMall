import styled from 'styled-components';
import Product from './Product';

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
  handleProductOrderChange,
}) {
  const productTotalPrice = Object.values(order.products).reduce(
    (acc, quantity) => acc + quantity * 1000,
    0
  );

  return (
    <>
      <h2>여행 상품</h2>
      <div>상품당 가격: ₩1,000</div>
      <div>상품 총 가격: ₩{productTotalPrice.toLocaleString()}</div>
      <Ul>
        {products.map(({ name, imagePath, description }) => (
          <Product
            key={name}
            name={name}
            imagePath={imagePath}
            description={description}
            quantity={order.products[name]}
            handleProductOrderChange={handleProductOrderChange}
          />
        ))}
      </Ul>
    </>
  );
}
