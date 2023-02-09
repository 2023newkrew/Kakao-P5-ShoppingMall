import { screen } from '@testing-library/react';
import { HEADER_TITLE } from '../../constants/home';
import Header from './header';
import useRender from '@/tests/hooks/use-render';

describe('Header component', () => {
  it('Header component renders correctly', () => {
    useRender(<Header />);

    const headerTitleEl = screen.getByText(HEADER_TITLE);
    expect(headerTitleEl).toBeInTheDocument();
  });
});
