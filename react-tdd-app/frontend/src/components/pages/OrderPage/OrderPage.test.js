import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../test-utils";
import OrderPage from "./OrderPage";

describe("total price of products and options", () => {
  test("total price starts with 0", () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });

    expect(total).toHaveTextContent("0");
  });
  test("updating total price when adding America product", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });
    const product = await screen.findByRole("spinbutton", { name: "America" });

    userEvent.clear(product);
    userEvent.type(product, "1");
    expect(total).toHaveTextContent(1000);
  });
  test("updating total price when adding Insurance option", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });
    const insurance = await screen.findByRole("checkbox", { name: "Insurance" });

    userEvent.click(insurance);
    expect(total).toHaveTextContent(500);
  });
  test("updating total price when adding America product and Insurance option", async () => {
    render(<OrderPage />);
    const total = screen.getByText("Total Price", { exact: false });
    const america = await screen.findByRole("spinbutton", { name: "America" });
    const insurance = await screen.findByRole("checkbox", { name: "Insurance" });

    userEvent.clear(america);
    userEvent.type(america, "3");
    userEvent.click(insurance);
    expect(total).toHaveTextContent(3500);
  });
});
