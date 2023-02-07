import styled from "styled-components";
import Product from "./Product";

const ProductList = () => {
  return (
    <ProductListContainer className="ProductListContainer">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  width: 45%;
  height: 100%;

  min-width: 850px;

  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);

  overflow: auto;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;
