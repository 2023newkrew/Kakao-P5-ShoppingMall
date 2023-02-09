import { renderWithRouter } from '../testing';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { COUNTRIES } from '../constant/contries.constant';
import { Router } from '../Router';
import { OPTIONS } from '../constant/options.constant';
import { act } from 'react-dom/test-utils';


describe("MainPage", () => {
  const user = userEvent.setup();
  it('메인 페이지에서 모든 상품 정보를 볼 수 있다.', async () => {
    renderWithRouter(<Router/>)
    for (const country of COUNTRIES) {
      const { name, imagePath, description } = country;
      expect(await screen.findByText(name)).toBeInTheDocument();
      expect(await screen.findByText(description)).toBeInTheDocument();
      expect((await screen.findByAltText(name)).src).toMatch(new RegExp(`${imagePath}$`, 'g'));
    }
  })

  it('메인 페이지에서 옵션 목록을 볼 수 있다.', async () => {
    renderWithRouter(<Router/>)
    for (const option of OPTIONS) {
      const { name, description } = option;
      expect(await screen.findByText(name)).toBeInTheDocument();
      expect(await screen.findByText(description)).toBeInTheDocument();
    }
  })

  it('메인 페이지에서 상품을 1종류를 선택하고 수량을 입력하면 버튼이 활성화 된다', async () => {
    renderWithRouter(<Router/>)

    expect(await screen.findByTestId('비활성화')).toBeDisabled();

    const products = await screen.findAllByTestId('상품');
    user.click(products[0]);
    
    const orderCountInput = await screen.findByPlaceholderText('주문수량');
    user.type(orderCountInput, '2');

    expect(await screen.findByTestId('활성화')).toBeEnabled();
  })

  it('메인 페이지에서 상품 2개를 주문하면 2000원이 표시된다.', async () => {
    renderWithRouter(<Router/>)
    // 상품 2개 선택
    const products = await screen.findAllByTestId('상품');
    user.click(products[0]);

    const orderCountInput = await screen.findByPlaceholderText('주문수량');
    user.type(orderCountInput, '2');

    expect(await screen.findByText(/총 가격 : 2000/)).toBeInTheDocument();
  })

  it('메인 페이지에서 옵션 2개를 선택하면 1000원이 표시된다.', async () => {
    renderWithRouter(<Router/>)
    // 옵션 2개 선택 
    const options = await screen.findAllByRole('checkbox');
    
    await user.click(options[0]);
    await user.click(options[1]);
    
    expect(await screen.findByText(/총 옵션 가격 : 1000/)).toBeInTheDocument();
  })
  it('메인 페이지에서 상품 2개와 옵션 1개를 선택하면 합계인 2500원이 출력된다.', async () => {
    renderWithRouter(<Router/>)
    // 상품 2개 선택, 옵션 1개 선택 
    const products = await screen.findAllByTestId('상품');
    await user.click(products[0]);

    const orderCountInput = await screen.findByPlaceholderText('주문수량');
    await user.type(orderCountInput, '2');

    const options = await screen.findAllByRole('checkbox');
    await user.click(options[0]);
  
    expect(await screen.findByText('총 가격 : 2500')).toBeInTheDocument();
  })
})