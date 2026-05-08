import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from './routes/home';
import Shop from './routes/shop';
import Cart from './routes/cart';
import ErrorPage from "./routes/errorPage"
import { useProductInfo } from "./components/productHook.jsx"

export default function App() {
  const {productData, productError, productLoading} = useProductInfo();
  const [currentCart, setCurrentCart] = useState({});
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root currentCart={currentCart}/>,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home productData={productData} error={productError} loading={productLoading}/>
            },
            {
              path: "/shop",
              element: <Shop productData={productData} error={productError} loading={productLoading} currentCart={currentCart} updateCart={setCurrentCart}/>
            },
            {
              path: "/cart",
              element: <Cart productData={productData} error={productError} loading={productLoading} currentCart={currentCart} updateCart={setCurrentCart}/>
            }
          ]
        }
      ]
    }
  ]);

  return (<RouterProvider router={router} />)
}
