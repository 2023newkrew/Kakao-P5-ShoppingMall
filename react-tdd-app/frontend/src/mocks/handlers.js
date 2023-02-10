import { rest } from 'msw';
import { COUNTRIES } from '../constant/contries.constant';
import { OPTIONS } from '../constant/options.constant';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(COUNTRIES))
  }),
  rest.get('/options', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(OPTIONS))
  }),
  rest.post('/order', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      {
        price: req.body.totals.total,
        orderNumber: Math.floor(Math.random() * 1000000)
      }
    ]))
  })
]