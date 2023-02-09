import { renderWithRouter } from '../testing';
import { screen } from '@testing-library/react';
import { Router } from '../Router';

describe("MainPage - Render", () => {
  renderWithRouter(<Router/>)
  it('메인 페이지에서 상품 목록을 볼 수 있다.', async () => {
    expect(await screen.findByText(/America/)).toBeInTheDocument();
    expect(await screen.findByText(/Good America/)).toBeInTheDocument();
  })
  it('메인 페이지에서 옵션 목록을 볼 수 있다.', async () => {
    expect(await screen.findByText(/Insurance/)).toBeInTheDocument();
    expect(await screen.findByText(/안전한 여행을 위해서!/)).toBeInTheDocument();
  })
})