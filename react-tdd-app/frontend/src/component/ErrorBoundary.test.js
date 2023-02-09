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

test("should catch by errorType prop", () => {
  class SomeSpecialError extends Error {
    constructor() {
      super("some special error");
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }

  function Thrower() {
    throw new SomeSpecialError();
  }

  render(
    <ErrorBoundary errorType={SomeSpecialError} fallback={<div>hello2</div>}>
      <Thrower />
    </ErrorBoundary>
  );

  const helloElement = screen.getByText("hello2");
  expect(helloElement).toBeInTheDocument();
});

test("should catch by errorType prop - 2", () => {
  class SomeSpecialError extends Error {
    constructor() {
      super("some special error");
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }

  class OtherError extends Error {
    constructor() {
      super("other error");
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }

  function Thrower() {
    throw new SomeSpecialError();
  }

  render(
    <ErrorBoundary fallback={<div>omg!</div>}>
      <ErrorBoundary errorType={OtherError} fallback={<div>hello2</div>}>
        <Thrower />
      </ErrorBoundary>
    </ErrorBoundary>
  );

  const helloElement = screen.getByText("omg!");
  expect(helloElement).toBeInTheDocument();
});
