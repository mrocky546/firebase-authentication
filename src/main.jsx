import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Login1 from "./components/Login1/Login1";
import Login2 from "./components/Login2/Login2";
import GitHub from "./components/GitHub/GitHub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/login1",
        element:<Login1></Login1>
      },
      {
        path:'/Login2',
        element:<Login2></Login2>
      },
      {
        path:"/github",
        element:<GitHub></GitHub>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
