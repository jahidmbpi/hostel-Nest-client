import { createBrowserRouter } from "react-router-dom";
import Roots from "../layOut/Roots";
import Home from "../homepage/Home";
import RoomDetails from "../pageComponents/roomDetails/RoomDetails";
import AllRoom from "../allRoom/AllRoom";
import Register from "../athentication/register/Register";
import LogIn from "../athentication/login/LogIn";
import UserProfile from "../pageComponents/roomDetails/userProfile/UserProfile";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/userprofile/:id",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
