import { useEffect, useState } from "react"
import { customAxios } from "../axios/customAxios";

export function useFetchProducts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchProducts = async () => {
    const { data: products } = await customAxios.get('/products');
    
    return products;
  }
  useEffect(() => {
    fetchProducts()
    .then((products) => {
      setProducts(products);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsError(true);
    });
  }, []);

  return [
    products,
    isLoading,
    isError
  ]
}