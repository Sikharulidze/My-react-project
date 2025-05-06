import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../schemas/loginSchema";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const loginHandler = async (data) => {};
  return (
    <form onSubmit={handleSubmit(loginHandler)}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        {...register("name")}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        placeholder="password"
        {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Home;
