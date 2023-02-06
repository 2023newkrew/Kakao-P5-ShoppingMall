import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

const server = setupServer(
  rest.get("/products", (request, response, context) => {
    return response(
      context.json([
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
      ])
    );
  })
);

const url = "";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders heading", () => {
  render(<App url={url} />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Travel Products");
});

test("renders loading", () => {
  render(<App url={url} />);
  const loadingElement = screen.getByText("loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders products", async () => {
  render(<App url={url} />);
  const americaElement = await screen.findByText("America");
  expect(americaElement).toBeInTheDocument();
  const englandElement = await screen.findByText("England");
  expect(englandElement).toBeInTheDocument();
});

test("handles server error", async () => {
  server.use(
    rest.get("/products", (request, response, context) => {
      return response(context.status(500));
    })
  );

  render(<App url={url} />);
  const errorElement = await screen.findByText("문제가 발생했습니다.");
  expect(errorElement).toBeInTheDocument();
});
