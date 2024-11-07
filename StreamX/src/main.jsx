import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";
import axios from "axios";

/** setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_ACCESS_TOKEN
}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);