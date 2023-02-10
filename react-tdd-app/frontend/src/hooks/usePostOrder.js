import { useEffect, useState } from "react";
import { customAxios } from "../axios/customAxios";

export function usePostOrder (total) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [price, setPrice] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);

  useEffect(() => {
    async function postOrder () {
      const { data } = await customAxios.post('/order', {
        totals: {
          total: total
        }
      })
      const { price, orderNumber } = data[data.length - 1];
      setPrice(price);
      setOrderNumber(orderNumber)
    }
    postOrder()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      })
  }, [total]);

  return [
    {
      price,
      orderNumber
    },
    isLoading,
    isError
  ]
}