import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { orderCountState, selectedProductState } from '../recoil/productState';
import { useMemo } from 'react';
export function Product({name, description, imagePath}) {
  const [selectedProduct, setSelectedProduct] = useRecoilState(selectedProductState)
  const [orderCount, setOrderCount] = useRecoilState(orderCountState);
  const isSelected = useMemo(() => selectedProduct === name, [selectedProduct, name]);
  
  function handleSelectProduct () {
    setSelectedProduct(name);
    setOrderCount('');
  }

  function handleOrderCountChange (event) {
    setOrderCount(event.target.value);
  }
  return (
    <ProductContainer isSelected={name === selectedProduct} onClick={handleSelectProduct} data-testid={`상품`}>
      <p>{name}</p>
      <p>{description}</p>
      <img src={`${process.env.REACT_APP_BACKEND_URL}/${imagePath}`} alt={`${name}`}/>
      {isSelected && <input placeholder='주문수량' value={orderCount} onChange={handleOrderCountChange}/>}
    </ProductContainer>
  );
}
const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props => props.isSelected && `
    border-radius: 8px;
    border: 1px solid blue;
  `}
  & > img {
    height: 200px;
    object-fit: cover;
  }
`;