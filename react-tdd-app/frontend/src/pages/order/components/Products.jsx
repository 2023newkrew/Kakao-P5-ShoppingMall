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
  return (
    <>
      <h2>여행 상품</h2>
      <div>상품당 가격: ₩1,000</div>
      <Ul>
        {products.map(({ name, imagePath, description }) => (
          <Product
            key={name}
            name={name}
            imagePath={imagePath}
            description={`상품 - ${description}`}
            quantity={order.products[name]}
            handleProductOrderChange={handleProductOrderChange}
          />
        ))}
      </Ul>
    </>
  );
}
