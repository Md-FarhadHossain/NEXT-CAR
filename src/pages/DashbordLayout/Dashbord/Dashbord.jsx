import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { UserContext } from "../../../context/AuthContext";


const Dashbord = () => {
  const [userData, setUserData] = useState({});
  const { user, logout } = useContext(UserContext);

  // const schema = yup.object().shape({
  //   name: yup.string().required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(6).required(),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null])
  //     .required(schema),
  // });

  // const {register, handleSubmit} = useForm({
  //   resolver: yupResolver()
  // })

  useEffect(() => {
    fetch(`http://localhost:5000/user-details?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  }, [user]);

  const accoutType = userData[0]?.accoutType;
  return (
    <div>
      <Navbar />

      <div className="drawer drawer-mobile bg-base-200">
        <input
          id="dashbord-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {accoutType === "Seller" ? (
              <>
                <li>
                  <Link to="add-a-product">Add A product</Link>
                </li>
                <li>
                  <Link to="my-product">My Products</Link>
                </li>
                <li>
                  <Link to="/blog">My buyers</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {accoutType === "Buyer" ? (
              <>
                <li>
                  <Link to="/blog">My orders</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {accoutType === "Admin" ? (
              <>
                <li>
                  <Link to="/blog">All Sellers</Link>
                </li>
                <li>
                  <Link to="/blog">All Buyers</Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
