import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../context/AuthContext";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const { user } = useContext(UserContext);
  const [responce, setResponce] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/user-details?accountType=Seller`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSellers(data);
      });
  }, [responce]);


  const handleDelete = id => {
    fetch(`http://localhost:5000/user-details/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
    })
    .then(res => res.json)
    .then(data => {
        console.log(data)
        toast.success('Successfully deleted the user')
        setResponce(!responce)
    })

  }

  console.log(sellers);
  return (
    <div className="px-4 lg:px-8">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No. </th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{seller.name}</div>
               
                    </div>
                  </div>
                </td>
                <td>
                  {seller.email}
                  <br />
                  
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-error text-white btn-xs"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn bg-cyan-400 text-white btn-xs"
                  >
                    verify 
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
