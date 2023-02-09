import { fireEvent, render, screen, within } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { server } from 'mocks/server';
import { OrderConfirmPage } from 'pages';
import { OPTION_PRODUCT_PRICE, TRAVEL_PRODUCT_PRICE } from 'utils/constants';
import { removeCharacter } from 'utils/shared';

describe('<OrderConfirmPage />', () => {
  test('주문여부 체크박스를 선택한 경우에는 [주문확인] 버튼이 enable 되어야 한다.', async () => {
    const { getByRole } = render(<OrderConfirmPage />);
    const input = getByRole('checkbox');
    const button = getByRole('button', { name: '주문확인' }) as HTMLButtonElement;

    fireEvent.click(input);
    expect(button.disabled).toBe(false);
  });
  test('주문여부 체크박스를 선택하지 않은 경우에는 [주문확인] 버튼이 disable 되어야 한다.', async () => {
    const { getByRole } = render(<OrderConfirmPage />);
    const input = getByRole('checkbox');
    const button = getByRole('button', { name: '주문확인' }) as HTMLButtonElement;

    fireEvent.click(input);
    expect(button.disabled).toBe(true);
  });
});
