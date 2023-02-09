import { render, screen } from 'test-utils';
import CompletePage from './CompletePage';
import { server } from 'mocks/server';
import { rest } from 'msw';

describe('complete page', () => {
  test('Success on load order info', async () => {
    render(<CompletePage />);

    const loadingStatement = screen.getByText('Loading...');
    expect(loadingStatement).toBeInTheDocument();

    const resultHeading = await screen.findByRole('heading', { name: '주문을 완료하였습니다.' });
    const disappearedLoadingStatement = screen.queryByText('Loading...');

    expect(resultHeading).toBeInTheDocument();
    expect(disappearedLoadingStatement).not.toBeInTheDocument();
  });
  test('Error on load order info', async () => {
    server.resetHandlers(rest.post('http://localhost:4000/order', (req, res, ctx) => res(ctx.status(500))));

    render(<CompletePage />);
    const errorStatement = await screen.findByText('주문 정보를 불러오지 못했습니다.');
    expect(errorStatement).toBeInTheDocument();
  });
});
