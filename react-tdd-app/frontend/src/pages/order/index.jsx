import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import Options from './components/Options';
import { useOrderStore } from '../../stores/orderStore';

export default function Order() {
  const [orderData, setOrderData] = useState({ products: [], options: [] });
  const order = useOrderStore((state) => state.order);
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
      <Products
        products={orderData.products}
        order={order}
        handleProductOrderChange={updateOrder}
      />
      <Options
        options={orderData.options}
        order={order}
        handleOptionOrderChange={updateOrder}
      />
    </>
  );
}
