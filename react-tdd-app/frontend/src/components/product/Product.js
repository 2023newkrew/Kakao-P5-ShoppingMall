import styled from "styled-components";

import useModal from "../../hooks/useModal";
import ProductModal from "../modal/ProductModal";

const Product = ({ imageUrl, title, overview }) => {
  const { Modal, open } = useModal();

  return (
    <ProductContainer>
      <ProductWrapper>
        <ImageContainer>
          <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
        </ImageContainer>
        <ProductOverview>
          <ProductTitle>America</ProductTitle>
          <ProductDescription>Good America</ProductDescription>
        </ProductOverview>
        <PurchaseButton onClick={open}>+</PurchaseButton>
        <Modal>
          <ProductModal />
        </Modal>
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

  display: flex;
  flex-direction: column;

  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
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
  aspect-ratio: 1 / 1;

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

const ProductTitle = styled.div`
  background-color: green;

  height: 30%;
  width: 100%;

  padding: 10px;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
`;

const ProductDescription = styled.div`
  padding: 10px;

  width: 100%;
  height: 70%;
`;

const PurchaseButton = styled.button`
  width: 10%;
  height: 200px;

  border: 0;
  outline: none;

  font-size: 70px;
`;
