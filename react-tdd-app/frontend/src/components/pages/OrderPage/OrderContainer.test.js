import { render, screen } from "@testing-library/react";
import OrderContainer from "./OrderContainer";

test("display item image from server", async () => {
  render(<OrderContainer itemType="products" />);

  const itemImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  const altTexts = itemImages.map((element) => element.alt);

  expect(itemImages).toHaveLength(4);
  expect(altTexts).toEqual(["America product", "England product", "Germany product", "Portland product"]);
});
