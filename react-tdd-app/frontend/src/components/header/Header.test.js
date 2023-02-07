import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("헤더는 Travel 이라는 타이틀을 가지고 있습니다 #연습", () => {
  render(<Header />);

  const titleElement = screen.getByTestId("title");
  expect(titleElement).toHaveTextContent("Travel");
});
