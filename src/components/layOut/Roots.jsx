import { Outlet } from "react-router-dom";
import Navbar from "../pageComponents/navbar/Navbar";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Roots;
