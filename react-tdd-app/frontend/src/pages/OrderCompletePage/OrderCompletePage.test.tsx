import { render } from '@testing-library/react';
import { server } from 'mocks/server';
import { OrderCompletePage } from 'pages';
import { orderHistoriesLength } from 'mocks/testData';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<OrderConfirmPage />', () => {
  test('server로부터 current order data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<OrderCompletePage />);
    const items = await findAllByRole('listitem', { name: /order list/ });
    expect(items).toHaveLength(orderHistoriesLength);
  });
});
