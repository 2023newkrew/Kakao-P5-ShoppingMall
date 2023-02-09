import React from 'react';
import { HEADER_TITLE } from '../../constants/home';
import { HeaderContainer, HeaderTitle } from './header.style';

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
  </HeaderContainer>
);

export default React.memo(Header);
