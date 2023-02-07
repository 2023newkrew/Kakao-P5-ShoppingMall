import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductModal = ({ title }) => {
  const [price, setPrice] = useState(0);

  const [setting, setSetting] = useState({
    count: 0,
    isInsurance: false,
    isDinner: false,
    isFirstClass: false,
  });

  useEffect(() => {
    setPrice(setting.count * 1000 + (setting.isInsurance + setting.isDinner + setting.isFirstClass) * 500);
  });

  return (
    <ProductModalContainer>
      <ProductImageContainer>
        <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
      </ProductImageContainer>
      <ProductSetting>
        <ProductSettingWrapper>
          <ProductOverview>
            <h2>Product</h2>
            <p>₩1,000</p>
            <h4>overview</h4>
            <p>Good America</p>
          </ProductOverview>
          <ProductSelection>
            <label htmlFor="count">수량 : </label>
            <input
              id="count"
              type="number"
              onChange={(event) => {
                setSetting({ ...setting, count: event.target.value });
              }}
              data-testid="counter"
              placeholder="0"
            />
            개
          </ProductSelection>
          <ProductOption>
            <h2>Option</h2>
            <p>₩500</p>
            <p>
              <input
                type="checkbox"
                id="insurance"
                onChange={() => {
                  setSetting({ ...setting, isInsurance: !setting.isInsurance });
                }}
              />
              <label htmlFor="insurance">insurance</label>
              <b>[안전한 여행을 위해서!]</b>
            </p>
            <p>
              <input
                type="checkbox"
                id="Dinner"
                onChange={() => {
                  setSetting({ ...setting, isDinner: !setting.isDinner });
                }}
              />
              <label htmlFor="Dinner">Dinner</label>
              <b>[맛있는 저녁과 함께하는 여행!]</b>
            </p>
            <p>
              <input
                type="checkbox"
                id="FirstClass"
                onChange={() => {
                  setSetting({ ...setting, isFirstClass: !setting.isFirstClass });
                }}
              />
              <label htmlFor="FirstClass">FirstClass</label>
              <b>[편안한 비행을 위해서!]</b>
            </p>
          </ProductOption>
        </ProductSettingWrapper>
        <ProductDecision>
          <h3>장바구니에 담기</h3>
          <p data-testid="price">{price}원</p>
        </ProductDecision>
      </ProductSetting>
    </ProductModalContainer>
  );
};

export default ProductModal;

const ProductModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductImageContainer = styled.div`
  height: 30%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductSetting = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
`;

const ProductSettingWrapper = styled.div`
  width: 85%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
`;

const ProductOverview = styled.div`
  width: 100%;
  height: 30%;

  border-bottom: 1px solid black;
  padding: 10px;
`;

const ProductSelection = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductOption = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
`;

const ProductDecision = styled.div`
  width: 15%;
  height: 100%;

  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
