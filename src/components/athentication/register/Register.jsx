import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className="">
<div className="mt-[200px]">
<form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-full bg-red-700" {...register("name")} />
      <input className="w-full bg-red-700" {...register("email")} />
      <input className="w-full bg-red-700" {...register("password")} />
  
      <input type="submit" />
    </form>
</div>
        </div>
    );
};

export default Register;