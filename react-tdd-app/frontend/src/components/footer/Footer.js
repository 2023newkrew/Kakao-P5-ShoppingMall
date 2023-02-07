import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footer = ({ totalPrice }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/credit");
  };

  return (
    <FooterComponent className="FooterComponent" disabled={!totalPrice} data-testid="price" onClick={onClick}>
      <p>
        <b>{totalPrice}</b>원
      </p>
      <p>계산하기</p>
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.button`
  background-color: #fff6bf;

  width: 100%;
  height: 5%;
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 80px;

  min-width: 850px;

  font-size: 40px;
  font-weight: 200;
`;
