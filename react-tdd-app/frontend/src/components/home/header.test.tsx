import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { HEADER_TITLE } from '../constants/home';
import Header from './header';
import theme from '@/styles/theme';

describe('Header component', () => {
  it('Header component renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>,
    );

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
