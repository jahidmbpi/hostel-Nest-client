import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backgound from "../../../../assets/banner/background.jpg";

const UserProfile = () => {
  const { id } = useParams();
  const [userdata, setUserData] = useState({});
  console.log(userdata);
  const { name, email, image } = userdata;
  console.log(name, email, image);

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

  return (
    <div>
      <div
        className=" w-full h-[500px] relative"
        style={{
          backgroundImage: `url(${backgound})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" absolute -bottom-[90px] left-[110px] flex justify-center items-center">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className=" relative">
        <div className="absolute top-5 left-[25%]">
          <div>
            <h2 className=" text-3xl font-medium ">{name}</h2>
            <p>{email}</p>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl">about</h2>
            <h2>name:{name}</h2>
            <p>email:{email}</p>
            <p>address: romna/2 block/d</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
