import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCarModal from "../CategoryCarModal/CategoryCarModal";

const CarBrandCategory = () => {
  const carData = useLoaderData();
  const cars = carData?.data;
  console.log(cars);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {cars?.map((car) => (
          <div
            key={car._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={car.image} alt={car.carName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Seller Name: {car.sellerName}</h3>
              </div>
              <div className="card-actions justify-end">
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">
                  open modal
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
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
