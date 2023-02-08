import { useEffect, useState } from "react"
import { customAxios } from "../axios/customAxios";

export function useFetchOptions() {
  const [options, setOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchOptions = async () => {
    const { data: options } = await customAxios.get('/options');
    
    return options;
  }
  useEffect(() => {
    fetchOptions()
    .then((options) => {
      setOptions(options);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsError(true);
    });
  }, []);

  return [
    options,
    isLoading,
    isError
  ]
}