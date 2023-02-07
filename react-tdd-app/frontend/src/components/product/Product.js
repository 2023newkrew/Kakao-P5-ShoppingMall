import styled from "styled-components";

import useModal from "../../hooks/useModal";
import ProductModal from "../modal/ProductModal";

const Product = ({ product, setTotalPrice, setProductList }) => {
  const { Modal, open, close } = useModal();

  return (
    <>
      <ProductContainer>
        <ProductWrapper>
          <ImageContainer>
            <img src={`http://localhost:4000/${product.imagePath}`} alt={product.name}></img>
          </ImageContainer>
          <ProductOverview>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductOverview>
          <PurchaseButton data-testid="purchaseButton" onClick={open}>
            +
          </PurchaseButton>
          <Modal data-testid="productModal">
            <ProductModal product={product} setTotalPrice={setTotalPrice} close={close} setProductList={setProductList} />
          </Modal>
        </ProductWrapper>
      </ProductContainer>
      <hr />
    </>
  );
};

export default Product;

const ProductContainer = styled.div`
  width: 100%;
  height: 20%;

  padding: 20px;

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
  width: 200px;
  height: auto;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductOverview = styled.div`
  width: 65%;
  height: auto;

  border: 1px solid gray;
`;

const ProductTitle = styled.div`
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
  height: auto;

  border: 0;
  outline: none;

  font-size: 70px;
`;
