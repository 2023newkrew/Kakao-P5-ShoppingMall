import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { REQUEST_PATH } from "../../../../constant";
import { MOCK_BASE_URL } from "../../../../mocks/handlers";
import { mockServer } from "../../../../mocks/mockServer";
import { render } from "../../../../test-utils";
import OrderContainer from "./OrderContainer";

test("display products image from server", async () => {
  render(<OrderContainer requestPath={REQUEST_PATH.products} />);

  const itemImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  const altTexts = itemImages.map((element) => element.alt);

  expect(itemImages).toHaveLength(4);
  expect(altTexts).toEqual(["America product", "England product", "Germany product", "Portland product"]);
});

test("when fetching product data, face an error", async () => {
  mockServer.resetHandlers(rest.get(`${MOCK_BASE_URL}/products`, (req, res, ctx) => res(ctx.status(500))));
  render(<OrderContainer requestPath={REQUEST_PATH.products} />);

  const errorBanner = await screen.findByTestId("error-banner");

  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("display options from server", async () => {
  render(<OrderContainer requestPath={REQUEST_PATH.options} />);

  const optionList = await screen.findAllByTestId("option-label");
  const optionValues = optionList.map((optionEl) => optionEl.textContent);

  expect(optionValues).toHaveLength(3);
  expect(optionValues).toEqual(["Insurance", "Dinner", "FirstClass"]);
});

test("update product's total when products change", async () => {
  render(<OrderContainer requestPath={REQUEST_PATH.products} />);

  const productsTotal = screen.getByText("총 가격", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");

  const englandInput = await screen.findByRole("spinbutton", {
    name: "England",
  });
  userEvent.type(englandInput, "3");

  expect(productsTotal).toHaveTextContent("4000");
});

test("update option's total when options change", async () => {
  render(<OrderContainer requestPath={REQUEST_PATH.options} />);

  const optionsTotal = screen.getByText("총 가격", { exact: false });
  const insuranceCheckBox = await screen.findByRole("checkbox", { name: "Insurance" });

  userEvent.click(insuranceCheckBox);
  expect(optionsTotal).toHaveTextContent(500);

  const dinnerCheckBox = await screen.findByRole("checkbox", { name: "Dinner" });
  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent(1000);

  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent(500);
});
