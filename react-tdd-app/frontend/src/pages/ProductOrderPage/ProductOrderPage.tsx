import React, { useContext, useEffect, useState } from 'react';
import { ProductList } from 'components';
import api from 'utils/api';
import { OrderStateContext } from 'contexts/OrderContext';

function ProductOrderPage() {
  const [travelProducts, setTravelProducts] = useState([]);
  const [optionProducts, setOptionProducts] = useState([]);
  const { total, count } = useContext(OrderStateContext);

  const getTravelProducts = async () => {
    const res = await api.get('/products', {});
    setTravelProducts(res);
  };

  const getOptionProducts = async () => {
    const res = await api.get('/options', {});
    setOptionProducts(res);
  };

  useEffect(() => {
    getTravelProducts();
    getOptionProducts();
  }, []);
  return (
    <main>
      <header>
        <h1>Travel Products</h1>
      </header>
      <ProductList products={travelProducts} price={1000} type="products" />
      <ProductList products={optionProducts} price={500} type="options" />
      <section>
        <h2>Total Price: ${total}</h2>
        <button type="button" disabled={count.products === 0}>
          주문하기
        </button>
      </section>
    </main>
  );
}

export default ProductOrderPage;
