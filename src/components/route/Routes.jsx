import { createBrowserRouter } from "react-router-dom";
import Roots from "../layOut/Roots";
import Home from "../homepage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
