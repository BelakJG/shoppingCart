import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from './routes/home';
import Shop from './routes/shop';
import Cart from './routes/cart';
import ErrorPage from "./routes/errorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/shop",
            element: <Shop />
          },
          {
            path: "/cart",
            element: <Cart />
          }
        ]
      }
    ]
  }
]);

export default function App() {
  return (<RouterProvider router={router} />)
}
