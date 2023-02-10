import styled from 'styled-components';
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useFetchOptions } from "../hooks/useFetchOptions";
import { Product } from "../components/Product";
import { Option } from "../components/Option";

import { useRecoilValue } from 'recoil';
import { orderCountState } from '../recoil/productState';
import { selectedOptionCountState } from '../recoil/optionState';
import { PRODUCT_PRICE } from '../constant/contries.constant';
import { OPTION_PRICE } from '../constant/options.constant';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();
  const [products, isLoadingProducts, isErrorProducts] = useFetchProducts();
  const [options, isLoadingOptions, isErrorOptions] = useFetchOptions();
  const orderCount = useRecoilValue(orderCountState);
  const selectedOptionCount = useRecoilValue(selectedOptionCountState);
  const productsPrice = orderCount * PRODUCT_PRICE;
  const optionsPrice = selectedOptionCount * OPTION_PRICE;
  
  const orderButtonStatus = !orderCount || orderCount === '0' ? '비활성화' : '활성화';
  function handleOrder () {
    navigate('/confirm');
  }

  if (isLoadingProducts || isLoadingOptions) return <>loading...</>;
  if (isErrorProducts || isErrorOptions) return <>error!</>;
  return (
    <Container>
      <Title>상품 목록</Title>
      <span>상품을 눌러서 갯수를 입력해주세요.</span>
      <ProductList>
        {products.map((product) => <Product key={product.name} {...product}/> )}
      </ProductList>
      <ProductPrice>총 상품 가격 : {productsPrice}</ProductPrice>

      <Title>옵션 목록</Title>
      <OptionList>
        {options.map((option) => <Option key={option.name} {...option} isChecked={false}/> )}
      </OptionList>
      <OptionPrice>총 옵션 가격 : {optionsPrice}</OptionPrice>
      
      <TotalPrice>총 가격 : {optionsPrice + productsPrice}</TotalPrice>
      <OrderButton onClick={handleOrder} data-testid={orderButtonStatus} disabled={!orderCount || orderCount === '0'}>주문하기</OrderButton>
    </Container>
  );
}

const Container = styled.div`
  
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const ProductList = styled.ul`
  display: flex;
  width: 100vw;
  gap: 40px;
`;
const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ProductPrice = styled.p`
  font-size: 12px;
`;
const OptionPrice = styled.p`
  font-size: 12px;
`;  
const TotalPrice = styled.p`
  border-top: 1px solid #ccc;
  padding-top: 24px;
`;
const OrderButton = styled.button`

`;