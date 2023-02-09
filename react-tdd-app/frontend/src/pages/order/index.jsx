import { useEffect, useState } from 'react';
import axios from 'axios';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import { useOrderStore } from '../../stores/orderStore';

export default function Order() {
  const [orderData, setOrderData] = useState({ products: [], options: [] });
  const order = useOrderStore((state) => state.order);
  const subtotalPrice = useOrderStore((state) => state.subtotalPrice);
  const totalPrice = useOrderStore((state) => state.totalPrice);
  const setOrder = useOrderStore((state) => state.setOrder);
  const updateOrder = useOrderStore((state) => state.updateOrder);

  useEffect(() => {
    const fetch = async () => {
      const { data: productsData } = await axios.get('/products');
      const { data: optionsData } = await axios.get('/options');
      setOrderData({ products: productsData, options: optionsData });
      setOrder({
        products: productsData.reduce(
          (acc, { name }) => ({ ...acc, [name]: 0 }),
          {}
        ),
        options: optionsData.reduce(
          (acc, { name }) => ({ ...acc, [name]: false }),
          {}
        ),
      });
    };

    fetch();
  }, [setOrder]);

  return (
    <>
      <h1>상품 주문</h1>
      {Object.keys(orderData).map((itemType) => (
        <OrderList
          key={itemType}
          itemType={itemType}
          items={orderData[itemType]}
          order={order}
          subtotalPrice={subtotalPrice}
          handleOrderChange={(name, value) =>
            updateOrder(itemType, name, value)
          }
        />
      ))}
      <OrderForm totalPrice={totalPrice} />
    </>
  );
}
