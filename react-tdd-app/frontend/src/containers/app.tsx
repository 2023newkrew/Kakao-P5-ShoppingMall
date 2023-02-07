import { useEffect, useState } from 'react';
import Header from '@/components/home/header';
import { getOptions, getProducts } from '@/apis/client';
import ProductList from '@/components/home/product-list';
import OptionList from '@/components/home/option-list';

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
      <OptionList options={options} />
    </>
  );
};

export default App;
