import React, { useContext, useEffect, useState } from 'react';
import { ProductList } from 'components';
import api from 'utils/api';
import { OrderStateContext } from 'contexts/OrderContext';
import { useNavigate } from 'react-router-dom';
import { TravelProduct, OptionProduct } from 'types';

function ProductOrderPage() {
  const [travelProducts, setTravelProducts] = useState<TravelProduct[]>([]);
  const [optionProducts, setOptionProducts] = useState<OptionProduct[]>([]);
  const { total, count } = useContext(OrderStateContext);
  const navigator = useNavigate();

  const getTravelProducts = async () => {
    const res = (await api.get('/products', {})) as TravelProduct[];
    setTravelProducts(res);
  };

  const getOptionProducts = async () => {
    const res = (await api.get('/options', {})) as OptionProduct[];
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
      <ProductList products={travelProducts} price={1000} type="travel" />
      <ProductList products={optionProducts} price={500} type="option" />
      <section>
        <h2>Total Price: ${total}</h2>
        <button
          type="button"
          disabled={count.travel === 0}
          onClick={() => {
            navigator('/confirm');
          }}
        >
          주문하기
        </button>
      </section>
    </main>
  );
}

export default ProductOrderPage;
