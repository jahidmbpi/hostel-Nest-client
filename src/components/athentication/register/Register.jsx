import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/Provider";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
console.log(image_hosting_key);
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { singUp } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    setLoading(true);
    singUp(data.email, data.password)
      .then((res) => {
        console.log(loading);
        console.log(res.user);
        console.log("user singh up succesfully");

        axios
          .post(image_hosting_url, imageFile, {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            console.log(result.data);
            console.log(result.data.data.display_url);

            console.log("image uploaded");
            const userData = {
              name: data.name,
              email: data.email,
              image: result.data.data.display_url,
              presentAddess: data.parasentAddress,
              permanentAddress: data.permanentAddress,
              dateOfBirth: data.dateOfBirth,
              currentClass: data.currentClass,
            };
            axios.post("http://localhost:5000/user", userData).then((res) => {
              console.log(res.data);
              setLoading(false);
              console.log(loading);
            });
          });
        navigate("/register");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-16 w-full">
        <h2 className="text-center text-4xl font-extrabold capitalize mb-5">
          please register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <div className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  {...register("name")}
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  {...register("email")}
                  type="text"
                  className="input w-full"
                  placeholder="email"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  {...register("password")}
                  type="password"
                  className="input w-full"
                  placeholder="password"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend">depertment</legend>
                <select
                  required
                  {...register("depertment")}
                  className="input w-full"
                >
                  <option value="">Select your dept</option>
                  <option value="science">science</option>
                  <option value="arts">arts</option>
                  <option value="comurce">comurce</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="fieldset">
                <legend className="fieldset-legend"> present address</legend>
                <input
                  {...register("parasentAddress")}
                  type="text"
                  className="input w-full"
                  placeholder="enter your present address"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend"> permanent address</legend>
                <input
                  {...register("permanentAddress")}
                  type="text"
                  className="input w-full"
                  placeholder="enter your permanents address"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend">date of birth</legend>
                <input
                  {...register("dateOfBirth")}
                  type="date"
                  className="input w-full"
                  placeholder="enter your date of birth"
                />
              </div>
              <div className="fieldset">
                <legend className="fieldset-legend">Current Class</legend>
                <select
                  required
                  {...register("currentClass")}
                  className="input w-full"
                >
                  <option value="">Select your class</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="HSC 1st Year">HSC 1st Year</option>
                  <option value="HSC 2nd Year">HSC 2nd Year</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
