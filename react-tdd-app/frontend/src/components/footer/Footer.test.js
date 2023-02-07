import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

test("푸터의 기본 가격 값이 0인지 테스트 합니다", () => {
  render(
    <BrowserRouter initialEntries={["/"]}>
      <Footer totalPrice={10000} />
    </BrowserRouter>
  );

  const price = screen.getByTestId("price");

  // * 데이터를 포함하고 있는지 여부를 알려줌
  expect(price).toHaveTextContent(10000);
});

test("푸터의 값이 0일때 버튼이 disable 되는 지 테스트 합니다", () => {
  render(
    <BrowserRouter initialEntries={["/"]}>
      <Footer totalPrice={0} />
    </BrowserRouter>
  );

  const priceButtonElement = screen.getByTestId("price");

  expect(priceButtonElement).toBeDisabled();
});
