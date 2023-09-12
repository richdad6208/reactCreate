import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Root />
  </React.StrictMode>
);
