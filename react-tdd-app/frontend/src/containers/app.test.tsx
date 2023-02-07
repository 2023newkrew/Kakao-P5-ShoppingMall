import { screen } from '@testing-library/react';
import { HEADER_TITLE } from '@/constants/home';
import App from './app';
import useRender from '@/tests/hooks/use-render';

describe('App component', () => {
  it('App component renders correctly', () => {
    useRender(<App />);

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
