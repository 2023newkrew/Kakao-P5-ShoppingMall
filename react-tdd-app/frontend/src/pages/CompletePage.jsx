import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { customAxios } from "../axios/customAxios";
import { PRODUCT_PRICE } from "../constant/contries.constant";
import { OPTION_PRICE } from "../constant/options.constant";
import { usePostOrder } from "../hooks/usePostOrder";
import { selectedOptionCountState, selectedOptionsState } from "../recoil/optionState";
import { orderCountState, selectedProductState } from "../recoil/productState";

export function CompletePage() {
  const navigate = useNavigate();

  const resetProduct = useResetRecoilState(selectedProductState);
  const resetCount = useResetRecoilState(orderCountState);
  const resetOption = useResetRecoilState(selectedOptionsState);

  const productCount = useRecoilValue(orderCountState);
  const optionCount = useRecoilValue(selectedOptionCountState);
  const productPrice = productCount * PRODUCT_PRICE;
  const optionPrice = optionCount * OPTION_PRICE;

  const [{price, orderNumber}, isLoading, isError] = usePostOrder(productPrice + optionPrice);

  function handleHome () {
    resetState();
    navigate('/');
  }
  function resetState () {
    resetProduct();
    resetCount();
    resetOption();
  }

  if (isLoading) return <>loading...</>
  if (isError) return <>error...</>
  return (
    <Container>
      <Title>주문이 성공했습니다.</Title>
      <OrderContainer>
        <OrderWrapper>
          <OrderTitle>주문 번호</OrderTitle>
          <OrderBody>{orderNumber}</OrderBody>
        </OrderWrapper>
        <OrderWrapper>
          <OrderTitle>주문 가격</OrderTitle>
          <OrderBody>{price}</OrderBody>
        </OrderWrapper>
      </OrderContainer>
      <button onClick={handleHome}>홈으로</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const OrderContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const OrderWrapper = styled.div`
`;
const OrderTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
const OrderBody = styled.p`
  font-size: 16px;
  text-align: center;
`;