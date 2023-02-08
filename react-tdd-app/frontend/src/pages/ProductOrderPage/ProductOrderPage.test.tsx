import { render, screen, within } from '@testing-library/react';
import { server } from 'mocks/server';
import { ProductOrderPage } from 'pages';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<ProductOrderPage />', () => {
  test('server로부터 travel product data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /products$/i });

    expect(items).toHaveLength(4);
  });
  test('server로부터 option data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /options$/i });

    expect(items).toHaveLength(3);
  });

  test('[주문하기] 버튼을 눌렀을 때 주문 확인 페이지로 넘어가야 한다.', () => {});

  test('travel product를 선택하지 않은 경우에는 [주문하기] 버튼이 disable 되어야 한다.', () => {});
});
