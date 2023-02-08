import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { useResource } from ".";
import ErrorBoundary from "../component/ErrorBoundary";

describe("useResource", () => {
  it("should return the result of the promise", async () => {
    const getResource = () => Promise.resolve("hello");

    function Inner({ resource }) {
      const data = resource.read();

      return <div>{data}</div>;
    }

    function Outer() {
      const resource = useResource(getResource);

      return (
        <Suspense>
          <Inner resource={resource} />
        </Suspense>
      );
    }

    render(<Outer />);

    await screen.findByText("hello");
  });

  it("should throw an error if the promise fails", async () => {
    const getResource = () => Promise.reject("error");

    function Inner({ resource }) {
      const data = resource.read();

      return <div>{data}</div>;
    }

    function Outer() {
      const resource = useResource(getResource);

      return (
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense>
            <Inner resource={resource} />
          </Suspense>
        </ErrorBoundary>
      );
    }

    render(<Outer />);

    await screen.findByText("error");
  });
});
