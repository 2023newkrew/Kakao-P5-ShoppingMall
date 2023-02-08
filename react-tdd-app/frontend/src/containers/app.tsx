import { useEffect, useState } from 'react';
import Header from '@/components/home/header';
import { getOptions, getProducts } from '@/apis/client';
import ProductList from '@/components/home/product-list';
import OptionList from '@/components/home/option-list';
import OrderTotal from '@/components/home/order-total';
import { OrderOptionContainer } from './app.style';

export type Product = {
  name: string;
  imagePath: string;
  description: string;
};

export type Option = {
  name: string;
  description: string;
};

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
    getOptions().then((res) => setOptions(res));
  }, []);

  return (
    <>
      <Header />
      <ProductList products={products} />
      <OrderOptionContainer>
        <OptionList options={options} />
        <OrderTotal />
      </OrderOptionContainer>
    </>
  );
};

export default App;
