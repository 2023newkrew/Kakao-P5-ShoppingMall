import OrderForm from '@/components/order/order-form';
import useBasketStore from '@/stores/use-basket-store';
import { OrderContainer, OrderItem, OrderList, OrderText, OrderTitle } from './order.style';

const Order = () => {
  const { optionsBasket, productsBasket, totalPrice } = useBasketStore();

  return (
    <OrderContainer>
      <OrderTitle>Products</OrderTitle>
      <OrderList>
        {Object.entries(productsBasket).map(([productName, productCount]) => (
          <OrderItem key={productName}>
            {productName} - {productCount}
          </OrderItem>
        ))}
      </OrderList>
      <OrderTitle>Options</OrderTitle>
      <OrderList>
        {Object.entries(optionsBasket).map(
          ([optionName, isChecked]) =>
            isChecked && <OrderItem key={optionName}>{optionName}</OrderItem>,
        )}
      </OrderList>
      <OrderTitle>
        TOTAL: <OrderText>{totalPrice}</OrderText>
      </OrderTitle>
      <OrderForm />
    </OrderContainer>
  );
};

export default Order;
