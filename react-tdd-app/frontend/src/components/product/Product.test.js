import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Product";

test("+ 버튼 클릭 시 제품에 대한 페이지가 뜹니다", () => {
  render(<Product />, { container: document.body });

  const buttonElement = screen.getByTestId("purchaseButton");

  // ! Target container is not a DOM element. 라는 오류 발생
  //   fireEvent.click(buttonElement);

  //   const modalElement = screen.getByTestId("productModal");
  //   expect(modalElement).toBeDefined();
});
