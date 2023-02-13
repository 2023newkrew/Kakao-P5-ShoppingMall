import styled from "styled-components";

const Header = () => {
  return (
    <HeaderComponent className="HeaderComponent" data-testid="title">
      Travel
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  background-color: #fff6bf;

  width: 100%;
  height: 6%;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 850px;

  font-size: 60px;
  font-weight: 200;

  padding: 10px;
`;
