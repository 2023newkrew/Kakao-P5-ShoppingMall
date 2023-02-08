import { useCallback } from 'react';
import useBasketStore from '@/stores/use-basket-store';
import { OrderButton, OrderTotalContainer, OrderTotalTitle } from './order-total.style';

const OrderTotal = () => {
  const { totalPrice } = useBasketStore();

  const onClick = useCallback(() => {
    // TODO: Move to order page
  }, []);

  return (
    <OrderTotalContainer>
      <OrderTotalTitle>Total Price: {totalPrice}</OrderTotalTitle>
      <OrderButton type="button" onClick={onClick}>
        주문하기
      </OrderButton>
    </OrderTotalContainer>
  );
};

export default OrderTotal;
