import { render, screen } from '@testing-library/react';
import { HEADER_TITLE } from '@/components/constants/home';
import App from './app';

describe('App component', () => {
  it('App component renders correctly', () => {
    render(<App />);

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
