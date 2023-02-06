import { render, screen } from '@testing-library/react';
import { HEADER_TITLE } from '../constants/home';
import Header from './header';

describe('Header component', () => {
  it('Header component renders correctly', () => {
    render(<Header />);

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
