import { createBrowserRouter } from "react-router-dom";
import Roots from "../layOut/Roots";
import Home from "../homepage/Home";
import RoomDetails from "../pageComponents/roomDetails/RoomDetails";
import AllRoom from "../allRoom/AllRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/roomdetails/:id",
        element: <RoomDetails></RoomDetails>,
      },
      {
        path: "/allroom",
        element: <AllRoom></AllRoom>,
      },
    ],
  },
]);
