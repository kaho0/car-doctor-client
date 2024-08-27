import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2"; // Import SweetAlert2

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Display success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have logged in successfully!",
          confirmButtonText: "OK",
        }).then(() => {
          // Navigate to the home page after the alert
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={loginlogo} alt="Login" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center text-orange-500 font-bold">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mb-5 text-gray-600 p-4">
            New to Car Doctors?{" "}
            <Link
              to="/signup"
              className="text-orange-500 font-bold hover:text-orange-600 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
