import { render, screen } from 'test-utils';
import SummaryPage from './Summary';

describe('summary page', () => {
  test('checkbox and button', () => {
    render(<SummaryPage />);

    const checkbox = screen.getByRole('checkbox', {
      name: '주문내용을 확인하셨나요?',
    }) as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole('button', { name: '주문 확인' }) as HTMLButtonElement;
    expect(confirmButton.disabled).toBeTruthy();
  });
});
