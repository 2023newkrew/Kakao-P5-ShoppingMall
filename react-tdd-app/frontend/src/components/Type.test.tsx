import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import Type from './Type';
import { server } from 'mocks/server';
import { PRODUCT_PRICE } from 'constants/price';
import { options } from 'mocks/options';

describe('Type component', () => {
  test('displays product images from server', async () => {
    render(<Type orderType="products" />);

    const productImages = (await screen.findAllByRole('img', {
      name: /product/i,
    })) as HTMLImageElement[];
    expect(productImages).toHaveLength(2);

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(['America product', 'England product']);
  });

  test('error on fetching product data', async () => {
    server.resetHandlers(rest.get('http://localhost:4000/products', (req, res, ctx) => res(ctx.status(500))));

    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId('error-banner');
    expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');
  });

  test('displays options data from server', async () => {
    render(<Type orderType="options" />);

    const optionCheckboxes = await screen.findAllByRole('checkbox');

    expect(optionCheckboxes).toHaveLength(options.length);
  });

  test("update product's total price when products changed", async () => {
    render(<Type orderType="products" />);

    const totalProductsPrice = screen.getByText('총 가격', { exact: false });
    expect(totalProductsPrice).toHaveTextContent('0');

    const americaInput = await screen.findByRole('spinbutton', { name: `America quantity` });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');

    expect(totalProductsPrice).toHaveTextContent(`₩${PRODUCT_PRICE}`);
  });

  test("update option's total price when options changed", async () => {
    render(<Type orderType="options" />);

    const totalOptionsPrice = screen.getByText('총 가격', { exact: false });
    expect(totalOptionsPrice).toHaveTextContent('0');

    const dinnerCheckbox = await screen.findByRole('checkbox', { name: `Dinner option` });
    userEvent.click(dinnerCheckbox);

    expect(totalOptionsPrice).toBeEnabled();
  });
});
