import axios from "axios";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/currentUser/useUser";
const AddNotice = () => {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useUser();
  console.log(currentUser);
  const onSubmit = (data) => {
    const currentDateTime = new Date().toLocaleString();
    const updatedata = {
      ...data,
      date: currentDateTime,
      name: currentUser.name,
      role: currentUser.role,
      photo: currentUser.image,
    };

    console.log(updatedata);
    axios
      .post("http://localhost:5000/notices", updatedata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="text-center capitalize text-3xl font-bold mt-6">
        add notice
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">add your notice </legend>
            <textarea
              {...register("notice")}
              className="textarea h-24"
              placeholder="Bio"
            ></textarea>
          </fieldset>

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNotice;
