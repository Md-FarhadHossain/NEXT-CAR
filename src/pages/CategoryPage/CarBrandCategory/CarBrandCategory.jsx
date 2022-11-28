import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../context/AuthContext";
import CategoryCarModal from "../CategoryCarModal/CategoryCarModal";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";

const CarBrandCategory = () => {
  const [wish, setWish] = useState(false);
  const [wishCar, setWishCar] = useState({});

  const carData = useLoaderData();
  const { user } = useContext(UserContext);
  const cars = carData?.data;
  // console.log(cars);


  // Order submit

  const handleOrderSubmit = (car) => {
    toast.success(`Car is booked ${car?._id}`);

    const carData = {
      image: car?.image,
      resalePrice: car?.resalePrice,     
      carName: car?.carName,
      userEmail: user?.email,
      paid: 'false'
    }


    fetch(`https://next-car-md-farhadhossain.vercel.app/my-order`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(carData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  };
  const handleWish = async (car) => {
    console.log(car._id);
    // const wishList = {
    //   wishList: "true",
    //   email: user?.email,
    //   cars,
    // };

    // const carRes = await fetch(

    //   `https://next-car-inky.vercel.app/category-car/${car?._id}`
    // );
    // const carData = await carRes.json();
    const userEmail = user?.email;
    const wishCarData = {
      carData,
      userEmail
    };
    // console.log(wishCar)

    fetch(`https://next-car-inky.vercel.app/category-car/${car?._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWishCar(data);

        if (data._id) {
          fetch(`https://next-car-inky.vercel.app/wishlist`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(wishCar),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        } else {
          fetch(`https://next-car-inky.vercel.app/wishlist`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(wishCarData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      });


    toast.success("successfully advertise your car");
  };

  const handleReport = (car) => {
    console.log(car._id)
    toast.success(`Repoted to admin`);

    const report = {
      report: 'true'
    }

    fetch(`https://next-car-md-farhadhossain.vercel.app/category-car/${car._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(report)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl py-8 mb-8 font-bold text-center">Chose a car</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {cars?.map((car) => (
          <div
            key={car._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-64 object-cover"
                src={car.image}
                alt={car.carName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {car.carName}{" "}
                <div className="flex items-center">
                <span
                  onClick={() => handleWish(car)}
                  className="cursor-pointer hover:text-pink-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-pink-100"
                >
                  {" "}
                  {wish ? <AiFillHeart /> : <AiOutlineHeart />} 
                </span> <span onClick={() => handleReport(car)} className="cursor-pointer" title="Report to Admin"><CiFlag1 /></span>
                </div>
              </h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Location: {car.location}</h3>
                <h3 className="text-lg">Posted: {car.createdOn}</h3>
                <h3 className="text-lg flex">
                  Seller Name:{" "}
                  <span className="flex items-center ml-2">
                    {" "}
                    {car.sellerName}{" "}
                    {car.status === "verified" ? (
                      <>
                        <img
                          className="w-5 ml-1"
                          src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png"
                          alt=""
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </span>
                </h3>
              </div>
              <div className="card-actions justify-end">
                {/* The button to open modal */}
                <label htmlFor={car?._id} className="btn">
                  Book Now
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id={car?._id} className="modal-toggle" />

                <div key={car?._id} className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor={car?._id}
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">{car?.carName}</h3>
                    <h3 className="text-lg font-bold">{car?.location}</h3>

                    <div>
                      <input
                        type="text"
                        defaultValue={user?.displayName}
                        placeholder="Type"
                        className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                      />
                      <input
                        type="text"
                        defaultValue={user?.email}
                        placeholder="Type"
                        className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                      />
                      <input
                        type="text"
                        defaultValue={`$ ${car?.resalePrice}`}
                        placeholder="Type"
                        className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                      />

                      <h3 className="text-lg font-semibold">
                        Call me: {car?.mobileNumber}
                      </h3>
                      <h3 className="text-lg font-semibold">
                        Meet Loaction: {car?.location}
                      </h3>

                      <label
                        onClick={() => handleOrderSubmit(car)}
                        htmlFor={car?._id}
                        className="btn w-full"
                      >
                        Sumbit
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrandCategory;
