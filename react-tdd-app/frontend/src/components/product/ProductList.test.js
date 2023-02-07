import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

test("display product images from server", async () => {
  render(<ProductList />);

  const productImages = await screen.findAllByRole("img");
  expect(productImages).toHaveLength(4);

  const altText = productImages.map((element) => element.alt);

  expect(altText).toEqual(["America", "England", "Germany", "Protland"]);
});
