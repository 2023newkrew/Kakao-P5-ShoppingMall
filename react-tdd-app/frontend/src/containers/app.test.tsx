import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { HEADER_TITLE } from '@/components/constants/home';
import App from './app';
import theme from '@/styles/theme';

describe('App component', () => {
  it('App component renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
