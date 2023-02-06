import { render, screen } from '@testing-library/react';
import App from './app';

test('start react app', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
