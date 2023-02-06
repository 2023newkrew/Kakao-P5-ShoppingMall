import styled from "styled-components";

const Product = ({ imageUrl, title, overview }) => {
  return (
    <ProductContainer className="ProductContainer">
      <ProductWrapper>
        <ImageContainer className="ImageContainer">
          <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
        </ImageContainer>
        <ProductOverview className="ProductOverview">
          <title>AAA</title>
        </ProductOverview>
        <PurchaseButton className="PurchaseButton">+</PurchaseButton>
      </ProductWrapper>
      <hr />
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  width: 100%;
  height: 20%;

  padding: 20px;
  min-width: 850px;

  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 40px;
`;

const ImageContainer = styled.div`
  background-color: beige;

  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductOverview = styled.div`
  background-color: azure;

  width: 65%;
  height: 200px;
`;

const PurchaseButton = styled.button`
  width: 10%;
  height: 200px;

  border: 0;
  outline: none;

  font-size: 70px;
`;
