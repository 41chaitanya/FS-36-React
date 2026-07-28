import { useForm } from "react-hook-form";
const App = () => {
  const { register, watch,formState:{errors} ,handleSubmit} = useForm();

  const email = watch("email");
  const password = watch("password");

  const submission=(data)=>{
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(submission)} >

      <input
        type=""
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message:"in valid  email"
          },
        })}
        />
      {errors.email?.message}


      <input type="password" {...register("password",{minLength:{value:6,message:"atleat 6 character"}})} />
        {errors.password?.message}
      <input type="submit" value="submit" />
        </form>
    </>
  );
};

export default App;
