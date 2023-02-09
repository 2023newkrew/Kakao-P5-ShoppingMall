import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderForm from "./OrderForm";

const productResource = {
  read: () => [
    {
      name: "America",
      imagePath: "/images/america.jpeg",
      description: "Good America",
    },
    {
      name: "England",
      imagePath: "/images/england.jpeg",
      description: "Good England",
    },
  ],
};

const optionResource = {
  read: () => [
    {
      name: "Insurance",
      description: "안전한 여행을 위해서!",
    },
    {
      name: "Dinner",
      description: "맛있는 저녁과 함께하는 여행!",
    },
  ],
};

test("상품 개수를 변경하면 선택 상품 가격이 변경된다.", () => {
  render(
    <OrderForm
      productResource={productResource}
      optionResource={optionResource}
    />
  );

  const americaInput = screen.getByLabelText("America");
  const productTotalPriceElement = screen.getByRole("definition", {
    name: "선택 상품 가격",
  });

  userEvent.type(americaInput, "3");
  expect(productTotalPriceElement).toHaveTextContent("3000");
});

test("옵션을 선택하면 가격이 변경된다.", () => {
  render(
    <OrderForm
      productResource={productResource}
      optionResource={optionResource}
    />
  );

  const insuranceInput = screen.getByRole("checkbox", { name: "Insurance" });
  const optionTotalPriceElement = screen.getByRole("definition", {
    name: "선택 옵션 가격",
  });

  userEvent.click(insuranceInput);
  expect(optionTotalPriceElement).toHaveTextContent("500");
});
