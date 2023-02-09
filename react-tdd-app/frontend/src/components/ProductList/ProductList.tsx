import React, { useContext } from 'react';
import { CheckBox, QuantityInput } from 'components';
import { ProductListProps } from 'types';
import { OrderDispatchContext, OrderStateContext } from 'contexts/OrderContext';

function ProductList({ products, price, type }: ProductListProps) {
  const { count } = useContext(OrderStateContext);
  const { setTravelOrder, setOptionOrder } = useContext(OrderDispatchContext);
  const typeLiteral = type === 'products' ? 'products' : 'options';

  return (
    <section>
      <h2>주문 종류</h2>
      <p role="paragraph">하나의 가격: {price}</p>
      <p role="paragraph">총합: {count[typeLiteral] * price}</p>
      <ul className={type === 'products' ? 'flex-row' : undefined}>
        {products.map((product) => (
          <li aria-label={type} key={product.name}>
            {type === 'products' ? (
              <QuantityInput
                name={product.name}
                imagePath={product.imagePath}
                description={product.description}
                updateOrder={setTravelOrder}
              />
            ) : (
              <CheckBox name={product.name} description={product.description} updateOrder={setOptionOrder} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(ProductList);
