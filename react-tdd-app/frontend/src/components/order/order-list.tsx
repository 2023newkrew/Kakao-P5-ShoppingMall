import useBasketStore from '@/stores/use-basket-store';
import {
  OrderListContainer,
  OrderListContent,
  OrderListItem,
  OrderListText,
  OrderListTitle,
} from './order-list.style';

const OrderList = () => {
  const { optionsBasket, productsBasket, totalPrice } = useBasketStore();

  return (
    <OrderListContainer>
      <OrderListTitle>Products</OrderListTitle>
      <OrderListContent>
        {Object.entries(productsBasket).map(([productName, productCount]) => (
          <OrderListItem key={productName}>
            {productName} - {productCount}
          </OrderListItem>
        ))}
      </OrderListContent>
      <OrderListTitle>Options</OrderListTitle>
      <OrderListContent>
        {Object.entries(optionsBasket).map(
          ([optionName, isChecked]) =>
            isChecked && <OrderListItem key={optionName}>{optionName}</OrderListItem>,
        )}
      </OrderListContent>
      <OrderListTitle>
        TOTAL: <OrderListText>{totalPrice}</OrderListText>
      </OrderListTitle>
    </OrderListContainer>
  );
};

export default OrderList;
