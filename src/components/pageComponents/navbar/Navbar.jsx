import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/vector-education-logo_779267-2080.avif";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/Provider";
import useUser from "../../hooks/currentUser/useUser";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [jahid, setJahid] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const { currentUser } = useUser();
  console.log(currentUser?.role);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto w-full fixed z-30 sm:max-w-7xl">
      <div className="flex justify-between h-[60px] sm:bg-black/10 items-center rounded-lg">
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
          className={`absolute top-[50px] z-10 left-0 w-full bg-gray-300 transition-transform duration-500 sm:static sm:bg-transparent sm:w-auto sm:flex ${
            open ? "translate-x-0" : "-translate-x-full sm:-translate-x-0"
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-4 list-none text-black sm:text-white p-4">
            <Link to="/">
              <li className="p-2">Home</li>
            </Link>
            <Link to="/about" className="p-2">
              About
            </Link>
            <Link className="p-2">Services</Link>
            <Link to="/contact" className="p-2">
              Contact
            </Link>
            <Link to="/Notice" className="p-2">
              notice
            </Link>
            {user && (
              <Link
                to={
                  currentUser?.role === "admin"
                    ? "/deshbord/adminhome"
                    : "/deshbord/userhome"
                }
                className="p-2 text-white"
              >
                deshbord
              </Link>
            )}

            <div className="relative">
              <div
                onClick={() => setJahid(!jahid)}
                className="ring-primary ring-offset-base-100 w-[45px] h-[45px] rounded-full ring ring-offset-2 cursor-pointer"
              >
                {currentUser ? (
                  <img
                    className="rounded-full w-[45px] h-[45px] avatar"
                    src={currentUser.image}
                  />
                ) : (
                  <img
                    className="rounded-full w-[45px] h-[45px]"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>

              {/* Profile Dropdown */}
              {jahid && (
                <div className="absolute top-10 right-0 bg-white p-4 rounded-lg shadow-lg w-[200px] z-10">
                  {user ? (
                    <div>
                      <li
                        className="text-black cursor-pointer"
                        onClick={handelLogOut}
                      >
                        Log out
                      </li>
                      <li className="text-black">seting </li>
                    </div>
                  ) : (
                    <div>
                      <Link to="/login">
                        <li className="p-2 text-black">Log in</li>
                      </Link>
                      <Link to="/register">
                        <li className="p-2 text-black">Register</li>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
