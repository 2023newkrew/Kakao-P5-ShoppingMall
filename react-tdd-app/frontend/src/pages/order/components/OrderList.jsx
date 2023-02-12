import styled from 'styled-components';
import Product from './item/Product';
import Option from './item/Option';
import { unitPrice } from '../../../stores/orderStore';

const Ul = styled.ul`
  ${({ itemType }) => {
    if (itemType === 'products') {
      return `
        display: flex;
        gap: 16px;
        list-style: none;
        margin: 0;
        padding: 0;

        img {
          width: 100%;
        }
      `;
    }

    return ``;
  }}
`;

const itemTypeName = {
  products: '상품',
  options: '옵션',
};

const itemComponent = {
  products: Product,
  options: Option,
};

export default function OrderList({
  itemType,
  items,
  order,
  subtotalPrice,
  handleOrderChange,
}) {
  const typeName = itemTypeName[itemType];

  return (
    <>
      <h2>{typeName}</h2>
      <div>
        {typeName}당 가격: ₩{unitPrice[itemType].toLocaleString()}
      </div>
      <div>
        {typeName} 총 가격: ₩{subtotalPrice[itemType].toLocaleString()}
      </div>
      <Ul itemType={itemType}>
        {items.map((item) => {
          const ItemComponent = itemComponent[itemType];
          return (
            <ItemComponent
              key={item.name}
              {...item}
              value={order[itemType][item.name]}
              handleOrderChange={handleOrderChange}
            />
          );
        })}
      </Ul>
    </>
  );
}
