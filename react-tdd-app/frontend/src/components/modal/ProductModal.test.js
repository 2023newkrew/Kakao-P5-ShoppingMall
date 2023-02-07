import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductModal from "./ProductModal";

test("update product's total when products change", async () => {
  render(<ProductModal />);

  const productTotal = screen.getByTestId("price");
  expect(productTotal).toHaveTextContent(0 + "원");

  const insuranceCheckbox = await screen.findByRole("checkbox", {
    name: "insurance",
  });

  userEvent.click(insuranceCheckbox);
  // expect(productTotal).toHaveTextContent("500원");
});
