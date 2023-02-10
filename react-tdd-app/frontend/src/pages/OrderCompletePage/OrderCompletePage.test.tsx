import { render } from '@testing-library/react';
import { server } from 'mocks/server';
import { OrderCompletePage } from 'pages';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<OrderConfirmPage />', () => {
  test('server로부터 current order data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<OrderCompletePage />);
    const items = await findAllByRole('listitem');
    expect(items).toHaveLength(1);
  });
});
