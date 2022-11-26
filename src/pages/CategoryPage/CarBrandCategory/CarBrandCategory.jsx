import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../context/AuthContext";
import CategoryCarModal from "../CategoryCarModal/CategoryCarModal";

const CarBrandCategory = () => {
  const carData = useLoaderData();
  const { user } = useContext(UserContext);
  const cars = carData?.data;
  console.log(cars);

  const handleOrderSubmit = () => {
    toast.success("Car is booked");
  };

  return (
    <div className="container mx-auto">
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
              <h2 className="card-title">{car.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Location: {car.location}</h3>
                <h3 className="text-lg">Posted: {car.createdOn}</h3>
                <h3 className="text-lg flex">Seller Name:{' '} <span className="flex items-center ml-2"> {car.sellerName} {car.sellerStatus === 'verified' ? <><img className="w-6 ml-2" src="https://cdn-icons-png.flaticon.com/512/4314/4314696.png" alt="" /></>: ''}</span></h3>
              </div>
              <div className="card-actions justify-end">
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">
                  Book Now
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                {car && (
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">{car.carName}</h3>
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

                        <h3 className="text-lg font-semibold">Call me: {car?.mobileNumber}</h3>
                        <h3 className="text-lg font-semibold">
                          Meet Loaction: {car?.location}
                        </h3>

                        <label
                          onClick={handleOrderSubmit}
                          htmlFor="my-modal-3"
                          className="btn w-full"
                        >
                          Sumbit
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrandCategory;
