import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/currentUser/useUser";

const Deshbord = () => {
  const { currentUser } = useUser();
  console.log(currentUser);
  return (
    <div className="flex w-full">
      <div className="w-[200px] min-h-screen bg-green-400">
        {currentUser.role === "admin" ? (
          <ul className="text-xl font-bold capitalize p-4 flex flex-col">
            <Link to="/deshbord/userhome">admin Home</Link>
            <Link to="/deshbord/userhome">admin Home</Link>
            <Link to="/deshbord/userhome">admin Home</Link>
            <Link to="/deshbord/userhome">admin Home</Link>
            <Link to="/deshbord/userhome">admin Home</Link>
          </ul>
        ) : (
          <ul className="text-xl font-bold capitalize p-4 flex flex-col">
            <Link to="/deshbord/userhome">user home</Link>
            <Link to="/deshbord/userhome">user home</Link>
            <Link to="/deshbord/userhome">user home</Link>
            <Link to="/deshbord/userhome">user home</Link>
            <Link to="/deshbord/userhome">user home</Link>
          </ul>
        )}
        <div className="divider divider-primary"></div>
        <div>
          <ul className="list-none p-4">
            <Link to="/">
              <li className="p-2">Home</li>
            </Link>
            <li className="p-2">About</li>
            <li className="p-2">Services</li>
            <li className="p-2">Contact</li>
            <li className="p-2">notice</li>
          </ul>
        </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
