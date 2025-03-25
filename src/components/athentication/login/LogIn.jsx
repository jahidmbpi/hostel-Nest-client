import { useContext } from "react";

import { AuthContext } from "../../provider/Provider";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { singIn } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  console.log(singIn);
  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        console.log("user singh in succesfully");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-16">
        <h2>please log in </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default LogIn;
