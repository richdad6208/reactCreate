import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screen/Home";
import Rating from "./components/Rating";
import Pod from "./components/Pod";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/rating",
            element: <Rating />,
          },
          {
            path: "/pod",
            element: <Pod />,
          },
        ],
      },
    ],
  },
]);

export default router;
