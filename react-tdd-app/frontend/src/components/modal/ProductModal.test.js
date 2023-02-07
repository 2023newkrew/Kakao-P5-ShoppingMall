import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductModal from "./ProductModal";

test("update product's total when products change", () => {
  render(<ProductModal />);

  const productTotal = screen.getByTestId("price");
  expect(productTotal).toHaveTextContent(0);

  const counter = screen.findByRole("input", {
    name: "개",
  });

  userEvent.type(counter, "10");
  expect(productTotal).toHaveTextContent(10000);
});
