import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useBasketStore from '@/stores/use-basket-store';
import {
  OrderButton,
  OrderTotalContainer,
  OrderTotalPrice,
  OrderTotalTitle,
} from './order-total.style';
import { ROUTE, ROUTE_PATH } from '@/constants/routes';

const OrderTotal = () => {
  const { totalPrice } = useBasketStore();
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(ROUTE_PATH[ROUTE.ORDER]);
  }, [navigate]);

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
