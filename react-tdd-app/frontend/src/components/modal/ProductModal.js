import { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "@store/store";

const ProductModal = ({ product, close }) => {
  const { setTotalPrice, setProductList } = useStore((state) => state);

  const [price, setPrice] = useState(0);

  const [purchaseInformation, setPurchaseInformation] = useState({
    count: 0,
    isInsurance: false,
    isDinner: false,
    isFirstClass: false,
  });

  useEffect(() => {
    /*
     * count : product 개수 * 1000
     * is* : 옵션들  * 500
     * ex) setPrice((5개 * 1,000원) + (5개 * (옵션 3개 체크) * 500원))) = 9,500원
     */
    setPrice(purchaseInformation.count * 1000 + purchaseInformation.count * (purchaseInformation.isInsurance + purchaseInformation.isDinner + purchaseInformation.isFirstClass) * 500);
  }, [purchaseInformation]);

  const onClick = () => {
    setTotalPrice(price);

    setProductList({
      title: product.name,
      count: purchaseInformation.count,
      isInsurance: purchaseInformation.isInsurance,
      isDinner: purchaseInformation.isDinner,
      isFirstClass: purchaseInformation.isFirstClass,
      price: price,
    });

    close();
  };

  return (
    product && (
      <ProductModalContainer>
        <ProductImageContainer>
          <img src={`http://localhost:4000/${product.imagePath}`} alt={product.title}></img>
        </ProductImageContainer>
        <ProductSetting>
          <ProductSettingWrapper>
            <ProductOverview>
              <h2>Product</h2>
              <h2>{product.title}</h2>
              <p>₩1,000</p>
              <h4>overview</h4>
              <p>{product.description}</p>
            </ProductOverview>
            <ProductSelection>
              <label>
                개수
                <input
                  id="count"
                  type="number"
                  onChange={(event) => {
                    setPurchaseInformation({ ...purchaseInformation, count: event.target.value });
                  }}
                  placeholder="0"
                />
              </label>
              개
            </ProductSelection>
            <ProductOption>
              <h2>Option</h2>
              <p>₩500</p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    id="insurance"
                    onChange={() => {
                      setPurchaseInformation({ ...purchaseInformation, isInsurance: !purchaseInformation.isInsurance });
                    }}
                  />
                  insurance
                </label>
                <b>[안전한 여행을 위해서!]</b>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    id="Dinner"
                    onChange={() => {
                      setPurchaseInformation({ ...purchaseInformation, isDinner: !purchaseInformation.isDinner });
                    }}
                  />
                  dinner
                </label>
                <b>[맛있는 저녁과 함께하는 여행!]</b>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    id="FirstClass"
                    onChange={() => {
                      setPurchaseInformation({ ...purchaseInformation, isFirstClass: !purchaseInformation.isFirstClass });
                    }}
                  />
                  firstClass
                </label>
                <b>[편안한 비행을 위해서!]</b>
              </p>
            </ProductOption>
          </ProductSettingWrapper>
          <ProductDecision disabled={!price} onClick={onClick}>
            <h3>장바구니에 담기</h3>
            <p data-testid="price">{price}원</p>
          </ProductDecision>
        </ProductSetting>
      </ProductModalContainer>
    )
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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

const ProductDecision = styled.button`
  width: 15%;
  height: 100%;

  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
