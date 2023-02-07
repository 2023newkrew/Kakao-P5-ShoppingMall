import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';

export default function Order() {
  const [products, setProducts] = useState([]);
  // const [options, setOptions] = useState([]);
  const [order, setOrder] = useState({});

  const handleProductOrderChange = (name, quantity) => {
    setOrder((prev) => ({
      ...prev,
      products: {
        ...prev.products,
        [name]: quantity,
      },
    }));
  };

  useEffect(() => {
    const fetch = async () => {
      const { data: productsData } = await axios.get('/products');
      // const { data: optionsData } = await axios.get('/options');
      setProducts(productsData);
      // setOptions(optionsData);
      setOrder((prev) => ({
        ...prev,
        products: productsData.reduce(
          (acc, { name }) => ({ ...acc, [name]: 0 }),
          {}
        ),
        // options: optionsData.reduce(
        //   (acc, { name }) => ({ ...acc, [name]: false }),
        //   {}
        // ),
      }));
    };

    fetch();
  }, []);

  return (
    <>
      <h1>상품 주문</h1>
      <Products
        products={products}
        order={order}
        handleProductOrderChange={handleProductOrderChange}
      />
    </>
  );
}
