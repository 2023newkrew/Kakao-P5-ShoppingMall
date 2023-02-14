import { rest } from 'msw';
import { products, options, orderHistories } from 'mocks/testData';

export const handlers = [
  rest.get('http://localhost:4000/products', (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  rest.get('http://localhost:4000/options', (req, res, ctx) => {
    return res(ctx.json(options));
  }),
  rest.post('http://localhost:4000/order', (req, res, ctx) => {
    return res(ctx.json(orderHistories));
  }),
];
