import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/Provider";

const Register = () => {
  const { singUp } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    singUp(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        console.log("user singh up succesfully");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-16">
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

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
