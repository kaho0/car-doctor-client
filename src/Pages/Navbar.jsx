import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">About</Link>
      </li>
      {user?.email ? (
        <li>
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      ) : (
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="w-32 h-16 object-contain" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
          Appointments
        </button>
      </div>
    </div>
  );
};

export default Navbar;
