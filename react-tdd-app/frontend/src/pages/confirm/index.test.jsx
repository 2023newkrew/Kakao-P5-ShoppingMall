import { render, screen } from '@testing-library/react';
import Confirm from '.';

test('주문 확인 체크박스 선택 시에만 주문 확인 버튼 클릭 가능', () => {
  render(<Confirm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /주문하려는 것을 확인하셨나요?/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /주문 확인/i });
  expect(confirmButton).toBeDisabled();
});
