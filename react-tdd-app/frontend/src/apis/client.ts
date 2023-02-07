import { API_ROUTE, API_ROUTE_PATH } from '@/constants/api';

export const getProducts = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.PRODUCTS]}`);
  return res.json();
};

export const getOptions = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.OPTIONS]}`);
  return res.json();
};

export const createOrder = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.ORDERS]}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
