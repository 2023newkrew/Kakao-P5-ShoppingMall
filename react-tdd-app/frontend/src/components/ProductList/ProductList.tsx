import React, { useContext } from 'react';
import { CheckBox, QuantityInput } from 'components';
import { ProductListProps, TravelProduct, OptionProduct } from 'types';
import { OrderDispatchContext, OrderStateContext } from 'contexts/OrderContext';

function ProductList({ products, price, type }: ProductListProps) {
  const { count } = useContext(OrderStateContext);
  const { setTravelOrder, setOptionOrder } = useContext(OrderDispatchContext);

  const renderProducts = () => {
    switch (type) {
      case 'travel':
        return products.map((product: TravelProduct) => (
          <li aria-label={`${type} product list item`} key={product.name}>
            <QuantityInput name={product.name} imagePath={product.imagePath} updateOrder={setTravelOrder} />
          </li>
        ));

      case 'option':
        return products.map((product: OptionProduct) => (
          <li aria-label={`${type} product list item`} key={product.name}>
            <CheckBox name={product.name} updateOrder={setOptionOrder} />
          </li>
        ));
      default:
        return null;
    }
  };

  return (
    <section>
      <h2>주문 종류</h2>
      <p>
        하나의 가격:
        <span aria-label="price per product">{price}</span>
      </p>
      <p>
        총합:
        <span aria-label="product total price">{count[type] * price}</span>
      </p>
      <ul className={type === 'travel' ? 'flex-row' : undefined} aria-label={`${type} product list`}>
        {renderProducts()}
      </ul>
    </section>
  );
}

export default React.memo(ProductList);
