import React, { useEffect, useState } from 'react';
import { ProductList } from 'components';
import api from 'utils/api';

function ProductOrderPage() {
  const [travelProducts, setTravelProducts] = useState([]);
  const [optionProducts, setOptionProducts] = useState([]);

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
        <h2>Total Price: value</h2>
        <button type="button">주문하기</button>
      </section>
    </main>
  );
}

export default ProductOrderPage;
