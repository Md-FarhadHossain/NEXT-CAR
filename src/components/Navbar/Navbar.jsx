import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import sLogo from "../../assets/s-logo.png";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menu = (
    <>
      <li>
        <Link className="text-lg font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg font-semibold" to="/blog">
          Blog
        </Link>
      </li>
      {user ? (
        <li>
          <Link className="text-lg font-semibold" to="/dashbord">
            Dashbord
          </Link>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className="bg-white shadow-md z-50 py-2  w-full sticky top-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
              {user ? (
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/signup" className="btn mt-2">
                Register
              </Link>
            </>
          )}

            </ul>
          </div>
          <Link
            to="/"
            className="font-bold flex items-center normal-case text-3xl w-full"
          >
            <img className="w-14" src={sLogo} alt="logo" />{" "}
            <div className="hidden lg:block md:block">
            <p className="flex flex-col">
              NEXT-CAR{" "}
              <span className="text-sm font-medium">
                Best Used Car Buy Sell
              </span>
            </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
       <div className="hidden lg:block md:block">
       {user ? (
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/signup" className="btn ml-3">
                Register
              </Link>
            </>
          )}
       </div>
          <label
            htmlFor="dashbord-sidebar"
            tabIndex={1}
            className="btn btn-ghost lg:hidden"
          >
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
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
