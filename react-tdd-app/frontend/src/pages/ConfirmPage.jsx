import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { PRODUCT_PRICE } from "../constant/contries.constant";
import { OPTION_PRICE } from "../constant/options.constant";
import { selectedOptionCountState, selectedOptionsState } from "../recoil/optionState";
import { orderCountState, selectedProductState } from "../recoil/productState";

export function ConfirmPage () {
  const navigate = useNavigate();
  const orderCount = useRecoilValue(orderCountState);
  const selectedProduct = useRecoilValue(selectedProductState);
  const selectedOptions = useRecoilValue(selectedOptionsState);
  const selectedOptionCount = useRecoilValue(selectedOptionCountState);
  const [isConfirm, setIsConfirm] = useState(false);
  const productsPrice = orderCount * PRODUCT_PRICE;
  const optionsPrice = selectedOptionCount * OPTION_PRICE;

  useEffect(() => {
    // 잘못된 접근 방지
    if (Number(orderCount) < 1) {
      navigate('/'); 
    }
  }, [orderCount, navigate]);
  
  function handleConfirm () {
    setIsConfirm(!isConfirm);
  }
  function handleOrderCheck () {
    navigate('/complete');
  }

  return (
    <Container>
      <Title>주문 확인</Title>
      <SubTitle>여행 상품: {productsPrice}</SubTitle>
      <ul>
        <li>{orderCount} {selectedProduct}</li>
      </ul>
      <SubTitle>옵션: {optionsPrice}</SubTitle>
      <ul>
        {[...selectedOptions].map((selectedOption, index) => {
          return (
            <li key={index}>
              {selectedOption}
            </li>
          )
        })}
      </ul>
      <label>
        <input type='checkbox' checked={isConfirm} onChange={handleConfirm}/>
        주문하려는 것을 확인하셨나요?
      </label>
      <br/>
      <button disabled={!isConfirm} onClick={handleOrderCheck}>주문 확인</button>
    </Container>
  )
}

const Container = styled.div`

`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;