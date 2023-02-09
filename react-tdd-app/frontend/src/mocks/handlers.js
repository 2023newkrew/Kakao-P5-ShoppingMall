import { rest } from "msw";

const BASE_URL = "http://localhost:5000";
export const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
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
        {
          name: "Germany",
          imagePath: "/images/germany.jpeg",
          description: "Good Germany",
        },
        {
          name: "Portland",
          imagePath: "/images/portland.jpeg",
          description: "Good Portland",
        },
      ])
    );
  }),
  rest.get(`${BASE_URL}/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Insurance",
          description: "안전한 여행을 위해서!",
        },
        {
          name: "Dinner",
          description: "맛있는 저녁과 함께하는 여행!",
        },
        {
          name: "FirstClass",
          description: "편안한 비행을 위해서!",
        },
      ])
    );
  }),
];
