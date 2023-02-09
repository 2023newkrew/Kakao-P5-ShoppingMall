import React from "react";
import OrderContextProvider from "../context/order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import OrderFormPage from "./OrderFormPage";
import OrderConfirmPage from "./OrderConfirmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderFormPage />,
  },
  {
    path: "confirm",
    element: <OrderConfirmPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <OrderContextProvider>
        <RouterProvider router={router} />
      </OrderContextProvider>
    </div>
  );
}

export default App;
