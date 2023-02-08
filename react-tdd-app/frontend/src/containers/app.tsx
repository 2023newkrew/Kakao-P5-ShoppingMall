import { useEffect, useState } from 'react';
import Header from '@/components/home/header';
import { getProducts } from '@/apis/client';
import ProductList from '@/components/home/product-list';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
};

export default App;
