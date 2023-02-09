import { CheckBox } from 'components';
import React, { useState } from 'react';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';

function OrderConfirmPage() {
  const [confirmOrder, setConfirmOrder] = useState(false);

  return (
    <main>
      <header>
        <h1>주문 확인</h1>
      </header>
      <section>
        <h2>여행상품: {TRAVEL_PRODUCT_PRICE}</h2>
        {/* 상품 목록 추가예정 */}
      </section>
      <section>
        <h2>옵션: {OPTION_PRODUCT_PRICE}</h2>
        {/* 상품 목록 추가예정 */}
      </section>
      <section>
        <CheckBox
          name="주문하려는 것을 확인하셨나요?"
          description=""
          updateOrder={(name: string, checked: boolean) => {
            setConfirmOrder(checked);
          }}
        />
        <button type="button" disabled={!confirmOrder}>
          주문확인
        </button>
      </section>
    </main>
  );
}

export default OrderConfirmPage;
