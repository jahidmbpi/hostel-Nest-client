import { createBrowserRouter } from "react-router-dom";
import Roots from "../layOut/Roots";
import Home from "../homepage/Home";
import RoomDetails from "../pageComponents/roomDetails/RoomDetails";
import AllRoom from "../allRoom/AllRoom";
import Register from "../athentication/register/Register";
import LogIn from "../athentication/login/LogIn";
import UserProfile from "../pageComponents/roomDetails/userProfile/UserProfile";
import Deshbord from "../layOut/Deshbord";
import UserHome from "../deshbordComponents/userHome/UserHome";
import AdminHome from "../deshbordComponents/adminHome/AdminHome";
import About from "../about/About";
import Contact from "../contact/Contact";

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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/deshbord",
        element: <Deshbord></Deshbord>,
        children: [
          {
            path: "userhome",
            element: <UserHome></UserHome>,
          },
          {
            path: "adminhome",
            element: <AdminHome></AdminHome>,
          },
        ],
      },
    ],
  },
]);
