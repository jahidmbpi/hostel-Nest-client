import { Outlet } from "react-router-dom";
import Navbar from "../pageComponents/navbar/Navbar";
import Footer from "../footer/Footer";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
      <div className="md:mt-[100px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
