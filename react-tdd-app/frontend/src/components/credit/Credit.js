import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Credit = ({ productList }) => {
  const [checked, setChecked] = useState(false);

  function getTotalPrice() {
    let totalPrice = 0;
    for (let index = 0; index < productList.length; index++) {
      totalPrice += productList[index].price;
    }
    return totalPrice;
  }

  function getProductList() {
    const products = productList.map((element, index) => (
      <li key={index}>
        {element.count} {element.title}
        <ul>
          {element.isInsurance && <li>insurance</li>}
          {element.isDinner && <li>isDinner</li>}
          {element.isFirstClass && <li>isFirstClass</li>}
        </ul>
      </li>
    ));
    return products;
  }

  return (
    <CreditContainer>
      <CreditWrapper>
        <h1>주문 확인</h1>
        <h1>Products: ₩{getTotalPrice()}</h1>
        <ProductContainer>{getProductList()}</ProductContainer>
        <label>
          <input type="checkbox" onClick={() => setChecked((checked) => !checked)} />
          주문하려는 것을 확인하셨나요?
        </label>
        <CreditButton disabled={!checked}>결제하기</CreditButton>
      </CreditWrapper>
    </CreditContainer>
  );
};

export default Credit;

const CreditContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreditWrapper = styled.div`
  width: 40%;
  height: 80%;
  padding: 20px;

  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductContainer = styled.ul`
  padding: 20px;
  padding-left: 40px;

  width: 100%;
  height: 90%;

  ul {
    padding-left: 40px;
  }
`;

const CreditButton = styled.button`
  width: 100%;
  height: 10%;

  outline: none;
`;
