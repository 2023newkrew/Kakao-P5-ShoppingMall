import { render, screen, act, waitFor } from 'test-utils';
import OrderPage from './OrderPage';
import userEvent from '@testing-library/user-event';

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

    const { totalOptionsPrice, nextButton, dinnerCheckbox } = await waitFor(async () => {
      const [, totalOptionsPrice] = await screen.findAllByText('총 가격', { exact: false });
      const nextButton = await screen.findByRole('button', { name: '주문' });
      const dinnerCheckbox = await screen.findByRole('checkbox', { name: `Dinner option` });

      return { totalOptionsPrice, nextButton, dinnerCheckbox };
    });

    expect(totalOptionsPrice).toHaveTextContent('0');
    userEvent.click(dinnerCheckbox);
    expect(totalOptionsPrice).toHaveTextContent('500');

    expect(nextButton).toBeDisabled();
  });
});
