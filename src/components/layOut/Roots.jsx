import { Outlet } from "react-router-dom";
import Navbar from "../pageComponents/navbar/Navbar";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
