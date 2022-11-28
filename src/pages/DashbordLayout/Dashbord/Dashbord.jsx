import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { UserContext } from "../../../context/AuthContext";


const Dashbord = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { user} = useContext(UserContext);

 

  

  useEffect(() => {
    fetch(`https://next-car-inky.vercel.app/user-details?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
        setLoading(!loading)
      });
  }, [user?.email]);

  const accoutType = userData[0]?.accountType;
 
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
          {loading ? <><ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
                  <Link to="my-orders">My orders</Link>
                  <Link to="my-wishlist">My WishList</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {accoutType === "Admin" ? (
              <>
                <li>
                  <Link to="all-sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="all-buyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="report-admin">Reported Items</Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul></> : <><ul className="menu flex items-center p-4 w-80 bg-base-100 text-base-content"><button className="btn btn-square loading"></button></ul></>}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
