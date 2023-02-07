import { fireEvent, render, screen } from "@testing-library/react";
import ProductModal from "./ProductModal";

test("입력한 값에 따라 가격의 총합이 변화하는 지 테스트", () => {
  /*
* 수량 1개 ->                     1000 원
* 보험, 저녁, 퍼스트 클래스 체크 ->    1500 원
! 총합 :                          2500 원
*/

  render(
    <ProductModal
      product={{
        name: "America",
        imagePath: "/images/america.jpeg",
        description: "Good America",
      }}
    />
  );

  const priceElement = screen.getByTestId("price");

  const countElement = screen.getByLabelText("개수");
  fireEvent.change(countElement, { target: { value: 1 } });

  const insuranceElement = screen.getByLabelText("insurance");
  fireEvent.click(insuranceElement);
  expect(priceElement).toHaveTextContent(1500);

  const dinnerElement = screen.getByLabelText("dinner");
  fireEvent.click(dinnerElement);
  expect(priceElement).toHaveTextContent(2000);

  const firstClassElement = screen.getByLabelText("firstClass");
  fireEvent.click(firstClassElement);
  expect(priceElement).toHaveTextContent(2500);
});

test("입력된 price의 값이 0이면 버튼이 disable 되는지 테스트", () => {
  render(
    <ProductModal
      product={{
        name: "America",
        imagePath: "/images/america.jpeg",
        description: "Good America",
      }}
    />
  );

  const priceElement = screen.getByTestId("price");

  const countElement = screen.getByLabelText("개수");
  fireEvent.change(countElement, { target: { value: 0 } });

  expect(priceElement).toHaveTextContent(0);

  const priceButtonElement = screen.getByRole("button");

  expect(priceButtonElement).toBeDisabled();
});
