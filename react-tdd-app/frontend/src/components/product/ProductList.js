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
`;
