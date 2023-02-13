import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreditPage from "../../pages/CreditPage";

import Credit from "./Credit";

test("checkbox and button", () => {
  render(
    <BrowserRouter>
      <Credit />
    </BrowserRouter>
  );

  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });

  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", {
    name: "결제하기",
  });

  expect(confirmButton.disabled).toBeTruthy();
});
