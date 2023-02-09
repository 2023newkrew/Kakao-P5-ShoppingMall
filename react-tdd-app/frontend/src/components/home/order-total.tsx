import { useCallback } from 'react';
import useBasketStore from '@/stores/use-basket-store';
import {
  OrderButton,
  OrderTotalContainer,
  OrderTotalPrice,
  OrderTotalTitle,
} from './order-total.style';

const OrderTotal = () => {
  const { totalPrice } = useBasketStore();

  const onClick = useCallback(() => {
    // TODO: Move to order page
  }, []);

  return (
    <OrderTotalContainer>
      <OrderTotalTitle>
        Total Price: <OrderTotalPrice data-testid="order-total">{totalPrice}</OrderTotalPrice>
      </OrderTotalTitle>
      <OrderButton
        type="button"
        onClick={onClick}
        data-testid="order-button"
        disabled={totalPrice <= 0}
      >
        주문하기
      </OrderButton>
    </OrderTotalContainer>
  );
};

export default OrderTotal;
