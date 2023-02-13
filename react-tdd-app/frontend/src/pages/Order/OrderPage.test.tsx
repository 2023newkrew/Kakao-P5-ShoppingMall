import { render, screen, act, waitFor, mockedUsedNavigate } from 'test-utils';
import OrderPage from './OrderPage';
import userEvent from '@testing-library/user-event';

const getOrderPageElements = async () => {
  const totalPrice = await screen.findByText('총 주문 가격', { exact: false });
  const totalProductsPrice = await screen.findByText('상품 총 가격', { exact: false });
  const productInputs = await screen.findAllByRole('spinbutton', { name: /quantity/i });
  const [americaInput, englandInput] = productInputs;
  const totalOptionsPrice = await screen.findByText('옵션 총 가격', { exact: false });
  const insuranceCheckbox = await screen.findByRole('checkbox', { name: 'Insurance option' });
  const dinnerCheckbox = await screen.findByRole('checkbox', { name: 'Dinner option' });
  const nextButton = await screen.findByRole('button', { name: '주문' });

  return {
    totalPrice,
    totalProductsPrice,
    totalOptionsPrice,
    insuranceCheckbox,
    dinnerCheckbox,
    productInputs,
    americaInput,
    englandInput,
    nextButton,
  };
};
describe('OrderPage test', () => {
  test('Disable routing button when products and options are not selected', async () => {
    render(<OrderPage />);
    await act(async () => {
      const nextButton = await screen.findByRole('button', { name: '주문' });
      expect(nextButton).toBeDisabled();
    });
  });

  test('Disable routing button when products are not selected', async () => {
    render(<OrderPage />);

    const { totalOptionsPrice, nextButton, dinnerCheckbox } = await waitFor(getOrderPageElements);

    expect(totalOptionsPrice).toHaveTextContent('0');
    userEvent.click(dinnerCheckbox);
    expect(totalOptionsPrice).toHaveTextContent('500');
    expect(nextButton).toBeDisabled();
  });

  test('Enable routing button when products are selected', async () => {
    render(<OrderPage />);

    const { totalProductsPrice, nextButton, americaInput } = await waitFor(getOrderPageElements);

    expect(totalProductsPrice).toHaveTextContent('0');

    userEvent.clear(americaInput);
    userEvent.type(americaInput, '2');
    await waitFor(() => {
      expect(totalProductsPrice).toHaveTextContent('2000');
    });

    await waitFor(() => {
      expect(nextButton).toBeEnabled();
    });
  });

  test('update options and products', async () => {
    render(<OrderPage />);

    const {
      totalPrice,
      totalProductsPrice,
      totalOptionsPrice,
      insuranceCheckbox,
      dinnerCheckbox,
      americaInput,
      englandInput,
      nextButton,
    } = await waitFor(getOrderPageElements);

    userEvent.clear(americaInput);
    userEvent.clear(englandInput);
    expect(totalOptionsPrice).toHaveTextContent('0');

    userEvent.click(dinnerCheckbox);
    expect(totalOptionsPrice).toHaveTextContent('500');

    userEvent.click(insuranceCheckbox);
    expect(totalOptionsPrice).toHaveTextContent('1000');

    userEvent.type(americaInput, '2');
    expect(totalProductsPrice).toHaveTextContent('2000');

    userEvent.type(englandInput, '4');
    expect(totalProductsPrice).toHaveTextContent('6000');
    expect(totalPrice).toHaveTextContent('7000');

    userEvent.click(nextButton);
    expect(mockedUsedNavigate).toBeCalled();
  });
});
