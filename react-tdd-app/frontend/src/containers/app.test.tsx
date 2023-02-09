import { fireEvent, screen } from '@testing-library/react';
import useRender from '@/tests/hooks/use-render';
import { FAKER_RESPONSE_OPTIONS, FAKER_RESPONSE_PRODUCTS } from '@/mocks/faker';
import { OPTION_PRICE, PRODUCT_PRICE } from '@/constants/price';
import App from './app';

describe('App component', () => {
  it('App component renders correctly', () => {
    useRender(<App />);

    const headerEl = screen.getByTestId('header');
    const productListEl = screen.getByTestId('product-list');
    const optionListEl = screen.getByTestId('option-list');
    const orderTotalPriceEl = screen.getByTestId('order-total');

    expect(headerEl).toBeInTheDocument();
    expect(productListEl).toBeInTheDocument();
    expect(optionListEl).toBeInTheDocument();
    expect(orderTotalPriceEl).toBeInTheDocument();
  });

  it('one can add products and options to the basket and total price changes', async () => {
    useRender(<App />);

    const productItemInputEls = await screen.findAllByTestId(/product-item-input/);
    const optionItemCheckboxEls = await screen.findAllByTestId(/option-item-checkbox/);
    const orderTotalPriceEl = screen.getByTestId('order-total');

    let expectTotalPrice = 0;

    expect(productItemInputEls).toHaveLength(FAKER_RESPONSE_PRODUCTS.length);
    expect(optionItemCheckboxEls).toHaveLength(FAKER_RESPONSE_OPTIONS.length);

    expect(orderTotalPriceEl).toHaveTextContent(expectTotalPrice.toString());

    // Add products
    productItemInputEls.forEach((productItemInputEl) => {
      fireEvent.input(productItemInputEl, { target: { value: '1' } });
      expectTotalPrice += PRODUCT_PRICE;
      expect(orderTotalPriceEl).toHaveTextContent(expectTotalPrice.toString());
    });

    // Add options
    optionItemCheckboxEls.forEach((optionItemCheckboxEl) => {
      fireEvent.click(optionItemCheckboxEl);
      expectTotalPrice += OPTION_PRICE;
      expect(orderTotalPriceEl).toHaveTextContent(expectTotalPrice.toString());
    });

    // Remove options
    optionItemCheckboxEls.forEach((optionItemCheckboxEl) => {
      fireEvent.click(optionItemCheckboxEl);
      expectTotalPrice -= OPTION_PRICE;
      expect(orderTotalPriceEl).toHaveTextContent(expectTotalPrice.toString());
    });

    // Add products
    productItemInputEls.forEach((productItemInputEl) => {
      fireEvent.input(productItemInputEl, { target: { value: '0' } });
      expectTotalPrice -= PRODUCT_PRICE;
      expect(orderTotalPriceEl).toHaveTextContent(expectTotalPrice.toString());
    });
  });

  it('if the total price is lower than 0, the order button should be disabled', async () => {
    useRender(<App />);

    const orderButtonEl = screen.getByTestId('order-button');
    const optionItemCheckboxEls = await screen.findAllByTestId(/option-item-checkbox/);

    expect(orderButtonEl).toBeDisabled();

    fireEvent.click(optionItemCheckboxEls[0]);

    expect(orderButtonEl).not.toBeDisabled();

    fireEvent.click(optionItemCheckboxEls[0]);
    fireEvent.click(optionItemCheckboxEls[1]);

    expect(orderButtonEl).not.toBeDisabled();

    fireEvent.click(optionItemCheckboxEls[1]);

    expect(orderButtonEl).toBeDisabled();
  });
});
