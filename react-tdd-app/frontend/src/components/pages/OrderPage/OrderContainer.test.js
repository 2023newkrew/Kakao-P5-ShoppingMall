import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { MOCK_BASE_URL } from "../../../mocks/handlers";
import { mockServer } from "../../../mocks/mockServer";
import OrderContainer from "./OrderContainer";

test("display products image from server", async () => {
  render(<OrderContainer requestPath="products" />);

  const itemImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  const altTexts = itemImages.map((element) => element.alt);

  expect(itemImages).toHaveLength(4);
  expect(altTexts).toEqual(["America product", "England product", "Germany product", "Portland product"]);
});

test("when fetching product data, face an error", async () => {
  mockServer.resetHandlers(rest.get(`${MOCK_BASE_URL}/products`, (req, res, ctx) => res(ctx.status(500))));
  render(<OrderContainer requestPath="products" />);

  const errorBanner = await screen.findByTestId("error-banner");

  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("display options from server", async () => {
  render(<OrderContainer requestPath="options" />);

  const optionList = await screen.findAllByTestId("option-label");
  const optionValues = optionList.map((optionEl) => optionEl.textContent);

  expect(optionValues).toHaveLength(3);
  expect(optionValues).toEqual(["Insurance", "Dinner", "FirstClass"]);
});
