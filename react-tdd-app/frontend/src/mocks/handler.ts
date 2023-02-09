/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import { FAKER_RESPONSE_OPTIONS, FAKER_RESPONSE_PRODUCTS } from './faker';
import { API_ROUTE, API_ROUTE_PATH } from '@/constants/api';

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.PRODUCTS]}`, (_, res, ctx) =>
    res(ctx.json(FAKER_RESPONSE_PRODUCTS)),
  ),
  rest.get(`${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.OPTIONS]}`, (_, res, ctx) =>
    res(ctx.json(FAKER_RESPONSE_OPTIONS)),
  ),
];
