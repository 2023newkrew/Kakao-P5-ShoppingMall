import { rest } from 'msw';
import { PRODUCTS, OPTIONS } from './data';

const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.json(PRODUCTS));
  }),
  rest.get('/options', (req, res, ctx) => {
    return res(ctx.json(OPTIONS));
  }),
];

export default handlers;
