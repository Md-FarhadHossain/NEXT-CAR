import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { UserContext } from "../../context/AuthContext";

const Login = () => {
  const { login, googleSignin,signout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);

    login(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Login successfully!");

        const user = result.user;
          const currentUser = {
            email: user.email,
          };

          
          // Jwt Authentication
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => {
              if (res.status === 401 || res.status === 403) {
                return signout();
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              // set the value in local storage
              localStorage.setItem("token", data.token);
              navigate(from, { replace: true });
            })
        
            .catch((err) => console.log(err));


      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    // Sign up with google
const handleGoogleSignin = () => {
    googleSignin()
    .then((result) => {
        console.log(result);
        toast.success("Sign up successfully!");
    })
    .catch(err => console.log(err))
}

  return (
    <div>
      <div className="hero h-[80vh] w-full">
        <div className="hero-content w-full flex-col">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-center text-xl">Login </h2>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Email"
                  className={`input input-bordered ${
                    errors.email ? "input-error" : "input-accent"
                  }`}
                />
                <small className="text-red-500">{errors.email?.message}</small>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className={`input input-bordered ${
                    errors.password ? "input-error" : "input-accent"
                  }`}
                />
                <small className="text-red-500">
                  {errors.password?.message}
                </small>
              </div>

              
              
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
                  Login
                </button>
              </div>
              <label className="text-center">
                <span className="label-text-alt mr-2">
                  Don't have an accout?
                </span>
                <Link to='/signup'
                  href="#"
                  className="label-text-alt link link-hover text-secondary"
                >
                  Signup Here
                </Link>
              </label>

              <div className="divider">OR</div>

              <div className="form-control">
              <button onClick={handleGoogleSignin} className="btn border-gray-500 no-animation hover:text-white font-semibold text-gray-600 border-2 bg-transparent">
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
