import React from "react";
import axios from 'axios';
import { useUser } from '../UserContext';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { baseUrl } from '../url';
function Login() {
  const { setUser ,saveToken} = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }
    await axios.post(`${baseUrl}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200 && res.data.message === 'User logged in successfully') {

          setUser({ isLoggedIn: true, email: userInfo.email });
          saveToken(res.data.token);
          toast.success("Logged In!");
          document.getElementById("loginModal").close();
        } else {
          toast.error('Invalid Credentials');
        }
      }).catch((error) => {
        console.log(error);
        toast.error('Invalid credentials');
      });
  };

  return (
    <>
      <div>
        <Toaster />
        <dialog id="loginModal" className="modal" font-playwriteNGModern>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"  onClick={() => document.getElementById("loginModal").close()}>
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-8">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                  />
                </label>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                  />
                </label>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <div className="flex flex-row justify-around">
                  <button className="bg-orange-400 text-white rounded-md px-2 hover:bg-orange-700" type="submit">
                    Login
                  </button>
                  <p className=""> Not Registered?</p>
                  <div className="">
                    <a className="bg-black text-white px-2 py-2 rounded-md cursor-pointer" href="/signup" >
                    Signup
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
