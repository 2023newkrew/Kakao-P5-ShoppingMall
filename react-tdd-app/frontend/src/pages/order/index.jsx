import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import Options from './components/Options';

export default function Order() {
  const [orderData, setOrderData] = useState({ products: [], options: [] });
  const [order, setOrder] = useState({ products: {}, options: {} });

  const handleProductOrderChange = (name, quantity) => {
    setOrder((prev) => ({
      ...prev,
      products: {
        ...prev.products,
        [name]: quantity,
      },
    }));
  };

  const handleOptionOrderChange = (name, checked) => {
    setOrder((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: checked,
      },
    }));
  };

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
  }, []);

  return (
    <>
      <h1>상품 주문</h1>
      <Products
        products={orderData.products}
        order={order}
        handleProductOrderChange={handleProductOrderChange}
      />
      <Options
        options={orderData.options}
        order={order}
        handleOptionOrderChange={handleOptionOrderChange}
      />
    </>
  );
}
