import { rest } from 'msw';
import { products as mockProducts } from './products';
import { options as mockOptions } from './options';
import { order as mockOrderComplete } from './order';

const BASE_URL = 'http://localhost:4000' as const;
const PRODUCT_URL = BASE_URL + '/products';
const OPTIONS_URL = BASE_URL + '/options';
const COMPLETE_ORDER_URL = BASE_URL + '/order';

export const handlers = [
  rest.get(PRODUCT_URL, (req, res, ctx) => {
    return res(ctx.json(mockProducts));
  }),
  rest.get(OPTIONS_URL, (req, res, ctx) => {
    return res(ctx.json(mockOptions));
  }),
  rest.post(COMPLETE_ORDER_URL, (req, res, ctx) => {
    return res(ctx.json(mockOrderComplete));
  }),
];
