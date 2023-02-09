import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../test-utils";
import SummaryPage from "./SummaryPage";

test("button is disabled when check-box is unchecked", () => {
  render(<SummaryPage />);
  const checkBox = screen.getByRole("checkbox", { name: "주문을 확인하셨습니까?" });
  const confirmButton = screen.getByRole("button", "주문 실행");

  expect(checkBox.checked).toEqual(false);
  expect(confirmButton.disabled).toBeTruthy();
});

test("button is able when check-box is checked", () => {
  render(<SummaryPage />);
  const checkBox = screen.getByRole("checkbox", { name: "주문을 확인하셨습니까?" });
  const confirmButton = screen.getByRole("button", "주문 실행");

  userEvent.click(checkBox);

  expect(checkBox.checked).toEqual(true);
  expect(confirmButton.disabled).toBeFalsy();
});

test("products total price and options total price are not negative", () => {
  render(<SummaryPage />);
  const productsPrice = screen.getByTestId("products-price");
  const optionsPrice = screen.getByTestId("options-price");

  expect(Number(productsPrice.textContent)).toBeGreaterThanOrEqual(0);
  expect(Number(optionsPrice.textContent)).toBeGreaterThanOrEqual(0);
});
