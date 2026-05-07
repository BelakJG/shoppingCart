import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from './routes/home';
import Shop from './routes/shop';
import Cart from './routes/cart';
import ErrorPage from "./routes/errorPage"
import { useProductInfo } from "./components/productHook"

export default function App() {
  const {productData, productError, productLoading} = useProductInfo();
  
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
              element: <Shop productData={productData} error={productError} loading={productLoading}/>
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

  return (<RouterProvider router={router} />)
}
