import { render, screen } from "@testing-library/react";
import SummaryPage from "./SummaryPage";

test("button is disabled when check-box is unchecked", () => {
  render(<SummaryPage />);
  const checkBox = screen.getByRole("checkbox", { name: "주문을 확인하셨습니까?" });
  const confirmButton = screen.getByRole("button", "주문 실행");

  expect(checkBox.checked).toEqual(false);
  expect(confirmButton.disabled).toBeTruthy();
});
