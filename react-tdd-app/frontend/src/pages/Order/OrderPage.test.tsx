import { render, screen, act } from 'test-utils';
import OrderPage from './OrderPage';

describe('OrderPage test', () => {
  test('Disable options when products are not selected', async () => {
    render(<OrderPage />);
    await act(async () => {
      const nextButton = await screen.findByRole('button', { name: '주문' });
      expect(nextButton).toBeDisabled();
    });
  });
});
