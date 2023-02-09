import '@testing-library/jest-dom';
import server from './mocks/server';

export const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
