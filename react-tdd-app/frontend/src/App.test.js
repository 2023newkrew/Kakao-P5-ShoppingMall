import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.js";

test("From order-page to complete-page", async () => {
  render(<App />);

  /* OrderPage */
  const americaInput = await screen.findByRole("spinbutton", { name: "America" });
  const englandInput = await screen.findByRole("spinbutton", { name: "England" });
  const insuranceCheckBox = await screen.findByRole("checkbox", { name: "Insurance" });
  const orderButton = screen.getByRole("button", { name: "주문" });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "2");
  userEvent.clear(englandInput);
  userEvent.type(englandInput, "3");
  userEvent.click(insuranceCheckBox);
  userEvent.click(orderButton);

  /* SummaryPage */
  const summaryHeading = screen.getByRole("heading", { name: "주문 확인" });
  const productsPrice = screen.getByTestId("products-price");
  const optionsPrice = screen.getByTestId("options-price");
  const confirmCheckBox = screen.getByRole("checkbox", { name: "주문을 확인하셨습니까?" });
  const confirmButton = screen.getByRole("button", { name: "주문 실행" });

  expect(summaryHeading).toBeInTheDocument();
  expect(productsPrice).toHaveTextContent("5000");
  expect(optionsPrice).toHaveTextContent("500");

  userEvent.click(confirmCheckBox);
  userEvent.click(confirmButton);

  /* CompletePage */
});
