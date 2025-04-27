import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backgound from "../../../../assets/banner/background.jpg";
import Swal from "sweetalert2";
const UserProfile = () => {
  const { id } = useParams();
  const [userdata, setUserData] = useState({});
  console.log(userdata);

  const {
    name,
    email,
    image,
    presentAddess,
    permanentAddress,
    currentClass,
    dateOfBirth,
  } = userdata;
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
  // এটা উপরে import করতে ভুলবে না

  const handleEditProfile = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Profile",
      html: `
      <input id="swal-input1" class="swal2-input" value="${
        name || ""
      }" placeholder="Name">
      <input id="swal-input2" class="swal2-input" value="${
        email || ""
      }" placeholder="Email">
      <input id="swal-input3" class="swal2-input" value="${
        presentAddess || ""
      }" placeholder="Present Address">
      <input id="swal-input4" class="swal2-input" value="${
        permanentAddress || ""
      }" placeholder="Permanent Address">
      <input id="swal-input5" class="swal2-input" value="${
        dateOfBirth || ""
      }" placeholder="Date of Birth">
      <input id="swal-input6" class="swal2-input" value="${
        currentClass || ""
      }" placeholder="Current Class">
    `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-input1").value,
          email: document.getElementById("swal-input2").value,
          presentAddess: document.getElementById("swal-input3").value,
          permanentAddress: document.getElementById("swal-input4").value,
          dateOfBirth: document.getElementById("swal-input5").value,
          currentClass: document.getElementById("swal-input6").value,
        };
      },
    });
    console.log(formValues);
  };

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
              <button onClick={handleEditProfile}>edit profile</button>
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
        <button className="w-[80px] h-[40px] rounded-lg text-black bg-green-400">
          Home
        </button>
        <button className="w-[80px] h-[40px] rounded-lg text-black bg-blue-400">
          histroy
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
