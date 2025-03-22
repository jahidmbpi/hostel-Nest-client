import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/vector-education-logo_779267-2080.avif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-full fixed z-30 sm:max-w-7xl">
      <div className="flex justify-between h-[60px] sm:bg-black/10 items-center p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          <h2 className="text-3xl text-[#6885fa] font-bold hidden sm:block">
            hotelNest
          </h2>
        </div>

        <div className="sm:hidden">
          {!open ? (
            <RxHamburgerMenu
              onClick={() => setOpen(true)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen(false)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>

        <div
          className={`absolute top-[50px] left-0 w-full bg-gray-300 transition-transform duration-500 sm:static sm:bg-transparent  sm:w-auto sm:flex ${
            open ? "translate-x-0" : "-translate-x-full sm:-translate-x-0 "
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-4 list-none text-black sm:text-white  p-4">
            <li className="p-2">Home</li>
            <li className="p-2">About</li>
            <li className="p-2">Services</li>
            <li className="p-2">Contact</li>
            <Link to="/register">
              {" "}
              <li className="p-2">register</li>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <li className="p-2">log in</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
