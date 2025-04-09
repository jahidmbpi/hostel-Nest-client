import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/currentUser/useUser";

const Deshbord = () => {
  const { currentUser } = useUser();
  console.log(currentUser);
  return (
    <div className="flex w-full">
      <div className="w-[200px] min-h-screen border rounded-lg">
        {currentUser.role === "admin" ? (
          <ul className=" capitalize p-4 flex flex-col space-y-4">
            <Link to="/deshbord/adminHome">admin Home</Link>
            <Link to="/deshbord/adminHome">manage user</Link>
            <Link to="/deshbord/adminAddNotice">add notice</Link>
            <Link to="/deshbord/adminHome">manage emplaye</Link>
            <Link to="/deshbord/adminHome">add rooms</Link>
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

      <div className="ml-4 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
