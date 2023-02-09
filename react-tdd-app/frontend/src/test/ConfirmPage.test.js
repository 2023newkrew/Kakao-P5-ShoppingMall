import { renderWithRouter } from '../testing';
import { screen } from '@testing-library/react';
import { Router } from '../Router';

renderWithRouter(<Router/>, { route: '/confirm' })

describe("Confirm Page - Render", () => {
  it('선택한 상품 정보를 볼 수 있다.', () => {
    
  })
  it('산텍힌 옵션 정보를 볼 수 있다.', () => {
    
  })
  it('체크 박스가 활성화 되면 주문 확인 버튼이 활성화된다.', () => {

  })
  it('주문 확인 버튼을 누르면 complete page로 정상적으로 넘어간다.', () => {

  })
})