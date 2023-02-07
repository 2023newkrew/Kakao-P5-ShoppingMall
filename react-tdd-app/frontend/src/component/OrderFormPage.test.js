import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import OrderFormPage from "./OrderFormPage";

const server = setupServer(
  rest
    .get("/products", (request, response, context) => {
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
    .get("/options", (request, response, context) => {
      return response(
        context.json([
          {
            name: "Insurance",
            description: "안전한 여행을 위해서!",
          },
          {
            name: "Dinner",
            description: "맛있는 저녁과 함께하는 여행!",
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

test("renders product names", async () => {
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

test("renders product images", async () => {
  render(<OrderFormPage />);
  const americaImageElement = await screen.findByAltText(
    "America product image"
  );
  expect(americaImageElement).toBeInTheDocument();
  const englandImageElement = await screen.findByAltText(
    "England product image"
  );
  expect(englandImageElement).toBeInTheDocument();
});

test("renders option names", async () => {
  render(<OrderFormPage />);
  const insuranceElement = await screen.findByText("Insurance");
  expect(insuranceElement).toBeInTheDocument();
  const dinnerElement = await screen.findByText("Dinner");
  expect(dinnerElement).toBeInTheDocument();
});
