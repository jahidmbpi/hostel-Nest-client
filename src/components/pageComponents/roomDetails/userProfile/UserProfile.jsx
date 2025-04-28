import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backgound from "../../../../assets/banner/background.jpg";
import { useQuery } from "@tanstack/react-query";
const UserProfile = () => {
  const { id } = useParams();
  const [userdata, setUserData] = useState({});
  const [history, setHistory] = useState(false);
  console.log(history);
  console.log("this is user data", userdata);

  const {
    name,
    email,
    image,
    presentAddess,
    permanentAddress,
    currentClass,
    dateOfBirth,
    _id,
  } = userdata;
  console.log(_id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  // this is user roompurches history
  const { data: roomHistory } = useQuery({
    queryKey: ["roomHistory", _id],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/userRoomHistory/${_id}`
      );
      return res.data;
    },
    enabled: !!_id,
  });
  console.log("this is room history", roomHistory);

  return (
    <div className="">
      <div
        className=" w-full h-[500px] relative bg-red-600"
        style={{
          backgroundImage: `url(${backgound})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex absolute bottom-[-100px] transform lg:translate-x-[60%]">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="pt-5 ml-[25%] pl-4">
          <div>
            <h2 className="text-3xl font-medium ">{name}</h2>
            <p>{email}</p>
          </div>
          <div className="mt-10 space-y-3">
            <div>
              <h2 className="text-2xl">about</h2>
              <button>edit profile</button>
            </div>
            <h2>name:{name}</h2>
            <p>email:{email}</p>
            <p>prasent address :{presentAddess}</p>
            <p>parmanet address :{permanentAddress}</p>
            <p>date of birth :{dateOfBirth}</p>
            <p>current class :{currentClass}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly w-1/2 mt-5">
        <Link to="/">
          <button className="w-[80px] h-[40px] rounded-lg text-black bg-green-400">
            Home
          </button>
        </Link>
        <button
          onClick={() => setHistory(!history)}
          className="w-[80px] h-[40px] rounded-lg text-black bg-blue-400"
        >
          histroy
        </button>
      </div>
      <div className={history ? "block" : "hidden"}>
        <div>
          <h2>this sis room details </h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
