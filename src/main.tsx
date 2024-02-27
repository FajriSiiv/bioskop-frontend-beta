import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieBook from "./components/[id]/MovieBook";
import CreateNewMovie from "./components/CreateNewMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <MovieBook />,
  },
  {
    path: "/new-movie",
    element: <CreateNewMovie />,
  },
  {
    path: "*",
    element: <p>Error page</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
