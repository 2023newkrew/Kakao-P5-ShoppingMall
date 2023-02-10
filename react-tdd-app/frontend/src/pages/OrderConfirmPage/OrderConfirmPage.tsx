import React, { useContext, useState } from 'react';
import { CheckBox } from 'components';
import { OrderStateContext } from 'contexts/OrderContext';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';
import { useNavigate } from 'react-router-dom';

function OrderConfirmPage() {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const { order, count } = useContext(OrderStateContext);
  const navigator = useNavigate();

  return (
    <main>
      <header>
        <h1>주문 확인</h1>
      </header>
      <section>
        <h2>여행상품: {count.products * TRAVEL_PRODUCT_PRICE}</h2>
        <p>
          {order.products.name} {count.products}개
        </p>
      </section>
      <section>
        <h2>옵션: {count.options * OPTION_PRODUCT_PRICE}</h2>
        <ul>
          {Array.from(order.options).map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </section>
      <section>
        <CheckBox
          name="주문하려는 것을 확인하셨나요?"
          updateOrder={(name: string, checked: boolean) => {
            setConfirmOrder(checked);
          }}
        />
        <button
          type="button"
          disabled={!confirmOrder}
          onClick={() => {
            navigator('/complete');
          }}
        >
          주문확인
        </button>
      </section>
    </main>
  );
}

export default OrderConfirmPage;
