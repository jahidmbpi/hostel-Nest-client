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
        console.log(res.data);
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
      <div className="mt-16">
        <h2>please register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              {...register("name")}
              type="text"
              className="input"
              placeholder="Type here"
            />
          </div>
          <div className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              {...register("email")}
              type="text"
              className="input"
              placeholder="email"
            />
          </div>
          <div className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password")}
              type="password"
              className="input"
              placeholder="password"
            />
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
