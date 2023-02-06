import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Travel Products");
});

test("renders loading", async () => {
  render(<App />);
  const loadingElement = await screen.findByText("loading...");
  expect(loadingElement).toBeInTheDocument();
});
