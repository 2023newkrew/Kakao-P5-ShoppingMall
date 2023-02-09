import { HEADER_TITLE } from '../../constants/home';
import { HeaderContainer, HeaderTitle } from './header.style';

const Header = () => (
  <HeaderContainer data-testid="header">
    <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
  </HeaderContainer>
);

export default Header;
