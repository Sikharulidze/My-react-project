import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../schemas/loginSchema";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const loginHandler = async (data) => {};

  useEffect(() => {
    const getPosts = async () => {
      // const loading = toast.loading("fetching data... ");
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response.data);

        // setTimeout(() => {
        //   toast.dismiss(loading);
        //   toast.success("user register successfully");
        // }, 1500);
      } catch (error) {
        console.log(error);
        // toast.dismiss(loading);
        // toast.error(error.message);
      }
    };
    getPosts();
  }, []);

  return (
    <form onSubmit={handleSubmit(loginHandler)}>
      <ToastContainer />
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
