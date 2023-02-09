import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderContextProvider from "../context/order";
import OrderConfirmPage from "./OrderConfirmPage";

const targetReactElement = (
  <OrderContextProvider>
    <OrderConfirmPage />
  </OrderContextProvider>
);

test("initial checkbox.checked should be false", () => {
  render(targetReactElement);

  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  const confirmButton = screen.getByRole("button", { name: "주문 확인" });

  expect(checkbox.checked).toEqual(false);
  expect(confirmButton.disabled).toBeTruthy();
});

test("button should be activated by clicking the checkbox", () => {
  render(targetReactElement);

  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  const confirmButton = screen.getByRole("button", { name: "주문 확인" });

  userEvent.click(checkbox);

  expect(checkbox.checked).toEqual(true);
  expect(confirmButton.disabled).toBeFalsy();
});
