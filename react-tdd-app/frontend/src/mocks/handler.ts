/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import { API_ROUTE, API_ROUTE_PATH } from '@/constants/api';

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.PRODUCTS]}`,
    (req, res, ctx) =>
      res(
        ctx.json([
          {
            name: 'America',
            imagePath: '/images/america.jpeg',
          },
          {
            name: 'England',
            imagePath: '/images/england.jpeg',
          },
        ]),
      ),
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${API_ROUTE_PATH[API_ROUTE.OPTIONS]}`,
    (req, res, ctx) =>
      res(
        ctx.json([
          {
            name: 'Insurance',
          },
          {
            name: 'Dinner',
          },
        ]),
      ),
  ),
];
