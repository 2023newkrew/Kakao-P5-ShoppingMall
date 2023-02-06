import { rest } from 'msw';
import { products as mockProducts } from './products';
import { options as mockOptions } from './options';

const BASE_URL = 'http://localhost:5000' as const;
const PRODUCT_URL = BASE_URL + '/products';
const OPTIONS_URL = BASE_URL + '/options';

export const handlers = [
  rest.get(PRODUCT_URL, (req, res, ctx) => {
    return res(ctx.json(mockProducts));
  }),
  rest.get(OPTIONS_URL, (req, res, ctx) => {
    return res(ctx.json(mockOptions));
  }),
];
