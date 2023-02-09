import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorBoundary from "./ErrorBoundary";
import OrderConfirm from "./OrderConfirm";

const products = [
  {
    name: "GoodProduct",
    amount: 2,
    price: 1800,
  },
];
const options = [
  {
    name: "GoodOption",
    amount: 1,
    price: 800,
  },
];

const targetReactElement = (
  <OrderConfirm products={products} options={options} />
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

test("if products prop is empty array, should throw error", () => {
  render(
    <ErrorBoundary fallback={<div>error!!!</div>}>
      <OrderConfirm products={[]} options={options} />
    </ErrorBoundary>
  );

  const errorElement = screen.getByText("error", { exact: false });
  expect(errorElement).toBeInTheDocument();
});
