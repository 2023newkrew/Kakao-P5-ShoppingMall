import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import OrderFormPage from "./OrderFormPage";

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

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders heading", () => {
  render(<OrderFormPage />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Travel Products");
});

test("renders loading", () => {
  render(<OrderFormPage />);
  const loadingElement = screen.getByText("loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders products", async () => {
  render(<OrderFormPage />);
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

  render(<OrderFormPage />);
  const errorElement = await screen.findByText("문제가 발생했습니다.");
  expect(errorElement).toBeInTheDocument();
});
