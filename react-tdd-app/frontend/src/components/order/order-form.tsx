import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/routes';
import {
  OrderFormButton,
  OrderFormContainer,
  OrderFormInput,
  OrderFormLabel,
} from './order-form.style';

const OrderForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onCheckboxClick = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);

  const onButtonClick = useCallback(() => {
    navigate(ROUTE_PATH[ROUTE.ORDER_DONE]);
  }, [navigate]);

  return (
    <OrderFormContainer>
      <OrderFormLabel htmlFor="name" data-testid="order-form-checkbox">
        <OrderFormInput type="checkbox" id="name" onClick={onCheckboxClick} />
        주문하려는 것을 확인하셨나요?
      </OrderFormLabel>
      <OrderFormButton
        type="button"
        disabled={!isChecked}
        onClick={onButtonClick}
        data-testid="order-form-button"
      >
        주문하기
      </OrderFormButton>
    </OrderFormContainer>
  );
};

export default OrderForm;
