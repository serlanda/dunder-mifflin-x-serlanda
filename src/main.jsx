import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Collections from "./pages/Collections";
import Collection from "./pages/Collection";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound/>,
  },
  {
    path: "/products",
    element: <HomePage/>
  },
  {
    path: "/products/:productId",
    element: <Product/>
  },
  {
    path: "/collections",
    element: <Collections/>,
  },
  {
    path: "/collections/:collectionId",
    element: <Collection/>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
