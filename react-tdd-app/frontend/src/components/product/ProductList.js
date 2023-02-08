import styled from "styled-components";
import Product from "./Product";

import { API } from "../../utils/fetch";
import useFetch from "../../hooks/useFetch";

const ProductList = () => {
  const { data: fetchProductList, loading, LoadingComponent } = useFetch(API.fetchProductItems());

  if (loading) return <LoadingComponent />;

  const ProductList = fetchProductList.map((product, index) => <Product key={index} product={product} />);

  return <ProductListContainer className="ProductListContainer">{ProductList}</ProductListContainer>;
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
