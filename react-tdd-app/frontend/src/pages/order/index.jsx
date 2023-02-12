import { useEffect, useState } from 'react';
import axios from 'axios';
import { shallow } from 'zustand/shallow';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import { useOrderStore } from '../../stores/orderStore';

export default function Order() {
  const [orderData, setOrderData] = useState({ products: [], options: [] });
  const { order, subtotalPrice, totalPrice, setOrder, updateOrder } =
    useOrderStore(
      (state) => ({
        order: state.order,
        subtotalPrice: state.subtotalPrice,
        totalPrice: state.totalPrice,
        setOrder: state.setOrder,
        updateOrder: state.updateOrder,
      }),
      shallow
    );

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
