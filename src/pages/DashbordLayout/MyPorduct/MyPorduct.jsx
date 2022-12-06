import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const MyPorduct = () => {
  const [res, setRes] = useState(true);
  const [cars, setCars] = useState([]);
  
  const { user } = useContext(UserContext);

  // const {data:allcarsDetails = [], status, refetch} = useQuery({
  //     queryKey: ['email',user?.email],
  //     queryFn: async () => await axios(`https://next-car-inky.vercel.app/car-details?email=${user?.email}`)
  // })
  // const cars = allcarsDetails?.data

  useEffect(() => {
    fetch(`https://next-car-inky.vercel.app/category-car?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, [res]);

  const handleCarDelete = (id) => {
    axios(`https://next-car-inky.vercel.app/category-car/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((data) => {
      setRes(!res);
      toast.success(`Successfully deleted the Car`);
      console.log(data);
    });
  };

  
  const handleCarBoots = (id) => {

    const advertise = {
     advertise: 'advertise'
    }
    console.log(advertise)

    fetch(`https://next-car-inky.vercel.app/category-car/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(advertise)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast.success('successfully advertise your car')
    })
  }



  return (
    <div className="lg:px-24 px-4 py-8">
      <h1 className="font-semibold text-center text-3xl mb-8">My Added Car</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-2">
        {cars?.map((car) => (
          <div
            key={car._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <div className="badge badge-primary absolute shadow-lg right-4 top-4">
                Available
              </div>
              <img
                className="w-full h-64 object-cover"
                src={car.image}
                alt={car.carName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Posted: {car.createdOn}</h3>
                <h3 className="text-lg">Seller Name: {car.sellerName}</h3>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCarDelete(car._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
                <button onClick={() => handleCarBoots(car._id)} className="btn btn-primary">Boots Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPorduct;
