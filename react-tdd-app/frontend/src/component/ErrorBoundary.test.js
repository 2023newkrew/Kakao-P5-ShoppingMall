import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

test("renders children", () => {
  render(
    <ErrorBoundary>
      <div>hello</div>
    </ErrorBoundary>
  );

  const helloElement = screen.getByText("hello");
  expect(helloElement).toBeInTheDocument();
});

test("renders fallback", () => {
  function Thrower() {
    throw new Error("some error");
  }

  render(
    <ErrorBoundary fallback={<div>hello2</div>}>
      <Thrower />
    </ErrorBoundary>
  );

  const helloElement = screen.getByText("hello2");
  expect(helloElement).toBeInTheDocument();
});
