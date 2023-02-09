import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Confirm from '../pages/confirm';

test('주문 확인 체크박스가 선택되었을 때만 주문 확인 버튼을 클릭할 수 있다.', () => {
  render(<Confirm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /주문하려는 것을 확인하셨나요?/i,
  });
  const confirmButton = screen.getByRole('button', { name: /주문 확인/i });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();
});
