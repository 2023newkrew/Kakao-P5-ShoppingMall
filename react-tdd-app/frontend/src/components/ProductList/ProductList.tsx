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
          <li aria-label={type} key={product.name}>
            <QuantityInput name={product.name} imagePath={product.imagePath} updateOrder={setTravelOrder} />
          </li>
        ));

      case 'option':
        return products.map((product: OptionProduct) => (
          <li aria-label={type} key={product.name}>
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
      <p role="paragraph">하나의 가격: {price}</p>
      <p role="paragraph">총합: {count[type] * price}</p>
      <ul className={type === 'travel' ? 'flex-row' : undefined}>{renderProducts()}</ul>
    </section>
  );
}

export default React.memo(ProductList);
