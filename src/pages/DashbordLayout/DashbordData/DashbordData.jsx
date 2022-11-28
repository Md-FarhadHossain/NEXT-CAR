import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { UserContext } from "../../../context/AuthContext";

const DashbordData = () => {
    const {user,logout} = useContext(UserContext)
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://next-car-inky.vercel.app/user-details?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  }, [user]);

  const accoutType = userData[0]?.accoutType
  return (
    <div>

    
<div className="flex justify-center items-center h-[85vh]">
<h1 className="text-7xl text-center font-bold">Wellcome to Dashbord</h1>

</div>
    </div>
  );
};

export default DashbordData;
