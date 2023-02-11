import { fireEvent, render } from 'mocks/testUtils';
import { OrderConfirmPage } from 'pages';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<OrderConfirmPage />', () => {
  test('주문여부 체크박스를 선택한 경우에는 [주문확인] 버튼이 enable 되어야 한다.', () => {
    const { getByRole } = render(<OrderConfirmPage />);
    const input = getByRole('checkbox', { name: /check input/ });
    const button = getByRole('button', { name: '주문확인' }) as HTMLButtonElement;

    fireEvent.click(input);

    expect(button.disabled).toBe(false);
  });
  test('주문여부 체크박스를 선택하지 않은 경우에는 [주문확인] 버튼이 disable 되어야 한다.', () => {
    const { getByRole } = render(<OrderConfirmPage />);
    const input = getByRole('checkbox', { name: /check input/ });
    const button = getByRole('button', { name: '주문확인' }) as HTMLButtonElement;

    fireEvent.click(input);
    fireEvent.click(input);

    expect(button.disabled).toBe(true);
  });

  test('[주문확인] 버튼을 눌렀을 때 주문 완료 페이지로 넘어가야 한다.', () => {
    const { getByRole } = render(<OrderConfirmPage />);
    const input = getByRole('checkbox', { name: /check input/ });
    const button = getByRole('button', { name: '주문확인' }) as HTMLButtonElement;

    fireEvent.click(input);
    fireEvent.click(button);

    expect(mockedUsedNavigate).toHaveBeenNthCalledWith(1, '/complete');
  });
});
